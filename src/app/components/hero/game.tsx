"use client"
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface Obstacle {
  id: number;
  x: number;
}

const Game: React.FC = () => {
  const [isJumping, setIsJumping] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);
  const [score, setScore] = useState<number>(0);

  const playerControls = useAnimation();

  // Handle jump
  const handleJump = (): void => {
    if (!isJumping) {
      setIsJumping(true);
      playerControls.start({
        y: -150,
        transition: { type: "spring", stiffness: 500, damping: 20 },
      });
      setTimeout(() => {
        playerControls.start({
          y: 0,
          transition: { type: "spring", stiffness: 500, damping: 20 },
        });
        setIsJumping(false);
      }, 500); // Jump duration
    }
  };

  // Add obstacles periodically
  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver) {
        setObstacles((prev) => [
          ...prev,
          { id: Date.now(), x: window.innerWidth },
        ]);
      }
    }, 2000); // Interval for obstacle creation
    return () => clearInterval(interval);
  }, [gameOver]);

  // Move obstacles and check for collisions
  useEffect(() => {
    const obstacleInterval = setInterval(() => {
      setObstacles((prev) =>
        prev.map((obstacle) => ({
          ...obstacle,
          x: obstacle.x - 10, // Speed of the obstacle
        }))
      );

      // Collision detection (basic)
      obstacles.forEach((obstacle) => {
        if (obstacle.x < 50 && obstacle.x > 0 && !isJumping) {
          setGameOver(true);
        }
      });

      // Remove off-screen obstacles
      setObstacles((prev) => prev.filter((obstacle) => obstacle.x > -50));
    }, 50); // Game loop speed
    return () => clearInterval(obstacleInterval);
  }, [isJumping, obstacles]);

  // Update score periodically
  useEffect(() => {
    const scoreInterval = setInterval(() => {
      if (!gameOver) {
        setScore((prev) => prev + 1);
      }
    }, 1000); // Increment score every second
    return () => clearInterval(scoreInterval);
  }, [gameOver]);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#87CEEB",
      }}
      onClick={handleJump}
    >
      {/* Score Display */}
      <div style={{ position: "absolute", top: 10, left: 10, fontSize: 24 }}>
        Score: {score}
      </div>

      {/* Game Over Message */}
      {gameOver && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: 32,
            color: "red",
          }}
        >
          Game Over!
        </div>
      )}

      {/* Ground (Scrolling Background) */}
      <motion.div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "200%",
          height: "100px",
          backgroundColor: "green",
        }}
        animate={{ x: gameOver ? 0 : -window.innerWidth }}
        transition={{
          repeat: Infinity,
          duration: 2, // Speed of background scroll
          ease: "linear",
        }}
      />

      {/* Player (Sprite) */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "100px",
          left: "50px",
          width: "50px",
          height: "50px",
          backgroundColor: "red", // Placeholder for sprite
        }}
        animate={playerControls}
      />

      {/* Obstacles */}
      {obstacles.map((obstacle) => (
        <motion.div
          key={obstacle.id}
          style={{
            position: "absolute",
            bottom: "100px",
            width: "50px",
            height: "50px",
            backgroundColor: "black",
          }}
          animate={{ x: obstacle.x }}
        />
      ))}
    </div>
  );
};

export default Game;
