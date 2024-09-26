"use client";
import "./styles.css";
import Link from "next/link";
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
        link:"https://forms.gle/ux6UT7Bc3cCHT2dY9",
      },
      {
        img: "/images/Events/AsarDagyara.jpg",
        title: "AsarDagyara",
        text: "text 2",
        link:"https://takshak-mca.in",
      },
      {
        img: "/images/Events/BGMI.jpg",
        title: "BGMI",
        text: "text 3",
        link:"https://www.yepdesk.com/bgmi4",
      },
      {
        img: "/images/Events/Codomizer.jpg",
        title: "Codomizer",
        text: "text 4",
        link:"https://takshak-mca.in",
      },
      {
        img: "/images/Events/FrameOfMind.jpg",
        title: "FrameOfMind",
        text: "text 5",
        link:"https://forms.gle/ERvnMUtxKdknG7V99",
      },
      {
        img: "/images/Events/FutureFrames.jpg",
        title: "FutureFrames",
        text: "text 6",
        link:"https://takshak-mca.in",
      },
    ],
    [
      {
        img: "/images/Events/MotoChondria.jpg",
        title: "MotoChondria",
        text: "text 1",
        link:"https://forms.gle/25CmiP17FeL6gZev9",
      },
      {
        img: "/images/Events/Promptify.jpg",
        title: "Promptify",
        text: "text 2",
        link:"https://takshak-mca.in",
      },
      {
        img: "/images/Events/TClash.jpg",
        title: "TClash",
        text: "text 3",
        link:"http://yepdesk.com/t-clash",
      },
      {
        img: "/images/Events/TechTrail.jpg",
        title: "TechTrail",
        text: "text 4",
        link:"https://bit.ly/Tech_Trail",
      },
      {
        img: "/images/Events/TechTrivia.jpg",
        title: "Tech Trivia",
        text: "text 5",
        link:"https://takshak-mca.in",
      },
      {
        img: "/images/Events/ChrysoDeras.jpg",
        title: "Chryso Deras",
        text: "text 3",
        link: "https://forms.gle/Sx673TpjUM6PAWAt7",
      },
    ],
    [
      {
        img: "/images/Events/workshops/Arduino.jpg",
        title: "Arduino and Microcontrollers Workshop",
        text: "text 1",
        link:"https://forms.gle/Q53S7wZ2spNqHfrd7",
      },
      {
        img: "/images/Events/workshops/BotBuild.jpg",
        title: "Bot Build",
        text: "text 2",
        link:"https://forms.gle/UqUt1QBnZ73vdtAz5",
      },
      {
        img: "/images/Events/workshops/BullBearsBrains.jpg",
        title: "Bulls Bears and Brains",
        text: "text 3",
        link:"https://forms.gle/ziZ2zttYKfAvpwp46",
      },
      {
        img: "/images/Events/workshops/CodeSprint.jpg",
        title: "Code Sprint",
        text: "text 4",
        link:"https://bit.ly/Code_Sprint",
      },
      {
        img: "/images/Events/workshops/InsightLab.jpg",
        title: "Insight Lab",
        text: "text 5",
        link:"https://bit.ly/INSIGHT_LAB",
      },
      {
        img: "/images/Events/workshops/QuantitySurveying.jpg",
        title: "Quantity Surveying",
        text: "text 5",
        link:"https://forms.gle/x9qoUWe5yneKCQvH6",
      },
    ],
    [
      {
        img: "/images/Events/Others/MaceKart.jpg",
        title: "MaceKart",
        text: "text 5",
        link:"http://surl.li/jiwaoo",
      },
      {
        img: "/images/Events/Others/TechTraverse.jpg",
        title: "Tech Traverse",
        text: "text 5",
        link:"https://forms.gle/dFaPiacxqHSP7szP9",
      },
    ],
    [
      {
        img: "/images/Events/XTerrain.jpg",
        title: "X Terrain",
        text: "text 5",
        link:"https://forms.gle/5C1G52qXKQQUevbq8",
      }, 
      {
        img: "/images/Events/DriveForward.jpg",
        title: "Drive Forward",
        text: "text 5",
        link:"https://forms.gle/KrdE1wnQL9zhMroJ9",
      }, 
    ],
    [
      {
        img: "/images/Events/telei/TeleiAutoshow.jpg",
        title: "Telei Autoshow",
        text: "text 5",
        link:"",
      }, 
      {
        img: "/images/Events/telei/TokyoDrift.jpg",
        title: "Tokyo Drift",
        text: "text 5",
        link:"",
      }, 
      {
        img: "/images/Events/telei/Celica.jpg",
        title: "Celica",
        text: "text 5",
        link:"",
      }, 
      {
        img: "/images/Events/telei/Porsche.jpg",
        title: "Porsche",
        text: "text 5",
        link:"",
      }, 
      {
        img: "/images/Events/telei/Isuzu.jpg",
        title: "Isuzu",
        text: "text 5",
        link:"",
      }, 
      {
        img: "/images/Events/telei/Hummer.jpg",
        title: "Hummer",
        text: "text 5",
        link:"",
      }, 
      {
        img: "/images/Events/telei/Supra.jpg",
        title: "Supra",
        text: "text 5",
        link:"",
      }, 
    ],
  ];

  return (
    <div className="container bg-black w-full relative overflow-x-clip overflow-y-clip">
      <div className=" bg-black  flex flex-col items-center text-white p-5">
        <h3 className=" text-4xl md:text-6xl font-semibold">All Events</h3>
      </div>
      <div className=" bg-black  flex flex-col items-center text-white p-5">
        <h5 className=" text-3xl md:text-4xl font-semibold">Competitions</h5>
      </div>
      <div className="carousel">
        {cardItems[0].map((key, index) => (
          <div className="item" key={index} onClick={() => openPopup(key.img)}>
            <p className="card-title">{key.title}</p>
            <a href={key.link} target="_blank"><img className="" src={key.img} alt="Card" /></a>
            <p className="details">{key.text}</p>
          </div>
        ))}
      </div>
      <div className="carousel">
        {cardItems[1].map((key, index) => (
          <div className="item" key={index} onClick={() => openPopup(key.img)}>
            <p className="card-title">{key.title}</p>
            <a href={key.link} target="_blank"><img className="" src={key.img} alt="Card" /></a>
            <p className="details">{key.text}</p>
          </div>
        ))}
      </div>
      <div className="carousel">
        {cardItems[4].map((key, index) => (
          <div className="item" key={index} onClick={() => openPopup(key.img)}>
            <p className="card-title">{key.title}</p>
            <a href={key.link} target="_blank"><img className="" src={key.img} alt="Card" /></a>
            <p className="details">{key.text}</p>
          </div>
        ))}
      </div>
      <div className=" bg-black  flex flex-col items-center text-white p-5">
        <h5 className=" text-3xl md:text-4xl font-semibold">Workshops</h5>
      </div>
      <div className="carousel">
        {cardItems[2].map((key, index) => (
          <div className="item" key={index} onClick={() => openPopup(key.img)}>
            <p className="card-title">{key.title}</p>
            <a href={key.link} target="_blank"><img className="" src={key.img} alt="Card" /></a>
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
            <a href={key.link} target="_blank"><img className="" src={key.img} alt="Card" /></a>
            <p className="details">{key.text}</p>
          </div>
        ))}
      </div>
      <div className=" bg-black  flex flex-col items-center text-white p-5">
        <h5 className=" text-4xl font-semibold">Telei</h5>
      </div>
      <div className="carousel">
        {cardItems[5].map((key, index) => (
          <div className="item" key={index} onClick={() => openPopup(key.img)}>
            <p className="card-title">{key.title}</p>
            <a href={key.link} target="_blank"><img className="" src={key.img} alt="Card" /></a>
            <p className="details">{key.text}</p>
          </div>
        ))}
      </div>
      <div className="back-container">
        <Link href="/" className="back-button">
          Back
        </Link>
      </div>
      {popupImage && (
        <div
          className="img-popup fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <img
            src={popupImage}
            alt="Popup Image"
            className="max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          />
          <div
            className="close-btn absolute top-4 right-4 w-10 h-10 cursor-pointer"
            onClick={closePopup}
          >
            <div className="bar w-full h-0.5 bg-white transform rotate-45 absolute top-1/2"></div>
            <div className="bar w-full h-0.5 bg-white transform -rotate-45 absolute top-1/2"></div>
          </div>
        </div>
      )}
    </div>
  );
}
