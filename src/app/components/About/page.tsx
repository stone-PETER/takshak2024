'use client';
import { useState, useEffect } from 'react';

export default function About() {
  const [circle, setCircle] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX: x, clientY: y } = e;
    setCircle({ x, y });

    setTimeout(() => {
      setCircle(null);
    }, 2000);
  };

  useEffect(() => {
    generateCircleGrid();
  }, []);

  const generateCircleGrid = () => {
    const circleGrid = document.getElementById('circleGrid') as HTMLElement;
    const numColumns = 14;
    const numRows = 7;

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numColumns; col++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.marginTop = row % 2 === 0 ? '0' : '0vw';
        circleGrid.appendChild(circle);
      }
    }
  };

  return (
    <section
      className="relative w-full h-screen overflow-hidden overflow-x-hidden"
      onMouseMove={handleMouseMove}
    >
      <div
        className="relative w-screen h-screen bg-cover bg-center flex"
        style={{
          backgroundImage: "url('about-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative w-full h-full flex flex-col sm:flex-row z-10">
          <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-4 md:p-8">
            <div className="max-w-4xl text-white text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">About Us</h2>
              <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquam mollis sagittis nisl, at sagittis nunc. Sed lobortis nulla arcu,
                dictum pharetra ipsum eleifend a. Cras porttitor ut dui sed rhoncus.
                Nam nec blandit felis.
              </p>
            </div>                
          </div>
          <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-4 md:p-8">
            
          </div>
        </div>
       
        {circle && (
          <div
            className="absolute circle"
            style={{
              left: `${circle.x - 50}px`, 
              top: `${circle.y - 50}px`, 
            }}
          />
        )}
      </div>

      <div id="circleGrid" className="absolute inset-0 pointer-events-none"></div>

      <style jsx>{`
        .circle {
          width: 100px;
          height: 100px;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          position: absolute;
          animation: circle-fade 1s ease forwards;
          transform: translate(-50%, -50%);
        }

        @keyframes circle-fade {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        #circleGrid {
          display: grid;
          grid-template-columns: repeat(14, 1fr); 
          grid-auto-rows: minmax(100px, auto);
          gap: 10px;
        }

        @media (max-width: 600px) {
          .bg-cover {
            background-image: url('about-bg-portrait.jpg') !important;
          }

          .flex-col {
            flex-direction: column;
          }

          .p-4 {
            padding: 16px;
          }
        }

        @media (max-width: 768px) {
          .text-3xl {
            font-size: 1.875rem;
          }
          .text-xl {
            font-size: 1.25rem;
          }
        }

        @media (max-width: 1024px) {
          .text-4xl {
            font-size: 2.25rem;
          }
          .text-2xl {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
