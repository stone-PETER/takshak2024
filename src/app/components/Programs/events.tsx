"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from 'next/image';

interface CardData {
  id: number;
  url: string;
}

interface CardProps extends CardData {
  setCards: React.Dispatch<React.SetStateAction<CardData[]>>;
  cards: CardData[];
}

const Events: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>(cardData);

  return (
    <section className="relative min-h-dvh">
      <section className="absolute z-10 bg-black h-full w-full text-white">
        Events name
      </section>

      <div className="grid h-[500px] w-full place-items-center bg-neutral-100">
        {cards.map((card) => (
          <Card key={card.id} cards={cards} setCards={setCards} {...card} />
        ))}
      </div>
    </section>
  );
};

const Card: React.FC<CardProps> = ({ id, url, setCards, cards }) => {
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCards((pv: CardData[]) => pv.filter((v: CardData) => v.id !== id));
    }
  };

  return (
    <motion.div
      style={{
        x,
        rotate,
        opacity,
        position: 'absolute',
        width: '288px',
        height: '384px',
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
    >
      <Image
        src={url}
        alt={`Card ${id}`}
        fill
        style={{ objectFit: 'cover' }}
      />
    </motion.div>
  );
  
};

const cardData: CardData[] = [
  {
    id: 1,
    url: "/Images/Tsomo.png",
  },
  {
    id: 2,
    url: "/Images/Tsomo.png",
  },
  {
    id: 3,
    url: "/Images/Tsomo.png",
  },
  {
    id: 4,
    url: "/Images/Tsomo.png"  },
  {
    id: 5,
    url: "/Images/Tsomo.png",
  },
  {
    id: 6,
    url: "/Images/Tsomo.png",
  },
  {
    id: 7,
    url: "/Images/Tsomo.png",
  },
  {
    id: 8,
    url: "/Images/Tsomo.png",
  },
];

export default Events;
 
