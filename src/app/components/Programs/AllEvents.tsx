"use client";
import "./styles.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
export default function MoreEvents() {
  const [popupImage, setPopupImage] = useState<string | null>(null);

  const openPopup = (src: string) => {
    setPopupImage(src);
  };

  const closePopup = () => {
    setPopupImage(null);
  };
  const cardItems = [
    [
      {
        img: "/images/Events/Ascension.jpg",
        title: "Ascension",
        text: "text 1",
      },
      {
        img: "/images/Events/AsarDagyara.jpg",
        title: "AsarDagyara",
        text: "text 2",
      },
      {
        img: "/images/Events/BGMI.jpg",
        title: "BGMI",
        text: "text 3",
      },
      {
        img: "/images/Events/Codomizer.jpg",
        title: "Codomizer",
        text: "text 4",
      },
      {
        img: "/images/Events/FrameOfMind.jpg",
        title: "FrameOfMind",
        text: "text 5",
      },
      {
        img: "/images/Events/FutureFrames.jpg",
        title: "FutureFrames",
        text: "text 6",
      },
    ],
    [
      {
        img: "/images/Events/MotoChondria.jpg",
        title: "MotoChondria",
        text: "text 1",
      },
      {
        img: "/images/Events/Promptify.jpg",
        title: "Promptify",
        text: "text 2",
      },
      {
        img: "/images/Events/TClash.jpg",
        title: "TClash",
        text: "text 3",
      },
      {
        img: "/images/Events/TechTrail.jpg",
        title: "TechTrail",
        text: "text 4",
      },
      {
        img: "/images/Events/TechTrivia.jpg",
        title: "TechTrivia",
        text: "text 5",
      },
    ],
    [
        {
          img: "/images/Events/workshops/Arduino.jpg",
          title: "Arduino and Microcontrollers Workshop",
          text: "text 1",
        },
        {
          img: "/images/Events/workshops/BotBuild.jpg",
          title: "Bot Build",
          text: "text 2",
        },
        {
          img: "/images/Events/workshops/BullBearsBrains.jpg",
          title: "Bulls Bears and Brains",
          text: "text 3",
        },
        {
          img: "/images/Events/workshops/CodeSprint.jpg",
          title: "Code Sprint",
          text: "text 4",
        },
        {
          img: "/images/Events/workshops/InsightLab.jpg",
          title: "Insight Lab",
          text: "text 5",
        },
        {
            img: "/images/Events/workshops/QuantitySurveying.jpg",
            title: "Quantity Surveying",
            text: "text 5",
          },
      ],
      [
        {
            img: "/images/Events/Others/MaceKart.jpg",
            title: "MaceKart",
            text: "text 5",
          },
          {
            img: "/images/Events/Others/TechTraverse.jpg",
            title: "Tech Traverse",
            text: "text 5",
          },
      ],
  ];

  return (
    <div className="container bg-black">
      <div className=" bg-black  flex flex-col items-center text-white p-5">
        <h3 className=" text-6xl font-semibold">All Events</h3>
      </div>
      <div className=" bg-black  flex flex-col items-center text-white p-5">
        <h5 className=" text-4xl font-semibold">Competitions</h5>
      </div>
      <div className="carousel">
        {cardItems[0].map((key, index) => (
          <div className="item" key={index} onClick={() => openPopup(key.img)}>
            <p className="card-title">{key.title}</p>
            <img className="" src={key.img} alt="Card" />
            <p className="details">{key.text}</p>
          </div>
        ))}
      </div>
      <div className="carousel">
        {cardItems[1].map((key, index) => (
          <div className="item" key={index} onClick={() => openPopup(key.img)}>
            <p className="card-title">{key.title}</p>
            <img className="" src={key.img} alt="Card" />
            <p className="details">{key.text}</p>
          </div>
        ))}
      </div>
      <div className=" bg-black  flex flex-col items-center text-white p-5">
        <h5 className=" text-4xl font-semibold">Workshops</h5>
      </div>
      <div className="carousel">
        {cardItems[2].map((key, index) => (
          <div className="item" key={index} onClick={() => openPopup(key.img)}>
          <p className="card-title">{key.title}</p>
          <img className="" src={key.img} alt="Card" />
          <p className="details">{key.text}</p>
        </div>
        ))}
      </div>
      <div className=" bg-black  flex flex-col items-center text-white p-5">
        <h5 className=" text-4xl font-semibold">Others</h5>
      </div>
      <div className="carousel">
        {cardItems[3].map((key, index) => (
          <div className="item" key={index} onClick={() => openPopup(key.img)}>
          <p className="card-title">{key.title}</p>
          <img className="" src={key.img} alt="Card" />
          <p className="details">{key.text}</p>
        </div>
        ))}
      </div>
      <div className="back-container">
        <Link to="/" className="back-button">
          Back
        </Link>
      </div>
      {popupImage && (
        <div className="img-popup fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closePopup}>
          <img src={popupImage} alt="Popup Image" className="max-w-full max-h-full" onClick={(e) => e.stopPropagation()} />
          <div className="close-btn absolute top-4 right-4 w-10 h-10 cursor-pointer" onClick={closePopup}>
            <div className="bar w-full h-0.5 bg-white transform rotate-45 absolute top-1/2"></div>
            <div className="bar w-full h-0.5 bg-white transform -rotate-45 absolute top-1/2"></div>
          </div>
        </div>
      )}
    </div>
  );
}
