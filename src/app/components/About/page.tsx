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
        className="relative w-full h-full bg-cover bg-center flex flex-col"
        style={{
          backgroundImage: "url('images/about-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative w-full h-full flex flex-col sm:flex-row z-10">
          <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-4 md:p-8">
            <div className="max-w-4xl text-white text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold" style={{ fontFamily: 'GraffitiHipster' }}>About Takshak</h2>
              <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl " style={{ fontFamily: 'Inter' }}>
              The millennials are calling, and we&apos;re answering. In the hills of Kothamangalam, where the morning mist fades to reveal 
              a vibrant hub of innovation, Takshak &#39;24 is here opening a portal to a decade that transformed everything. The Backstreet Boys 
              are blasting, Britney&apos;s in her prime, and the spirit of the 90&apos;s is alive and kicking. This isn&apos;t just a stroll down 
              memory lane — it&apos;s a full-blown revival.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-4 md:p-8">
            <div className="relative disk-container">
              <img
                src="images/disk-about.png"
                alt="Rotating Disk"
                className="disk-image"
              />
            </div>
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

        .disk-container {
          width: 1000px;
          height: 1000px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .disk-image {
          position: absolute;
          left: 2%;
          width: 900px; 
          height: 900px;
          max-width: 900%; 
          max-height: 900%;
          object-fit: cover;
          animation: rotate 10s linear infinite;
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
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

 /* Styles for responsiveness */
  @media (max-width: 1024px) {
  .relative {
    display: flex;
    flex-direction: row;
  }

  .lg:w-1/2 {
    width: 50%;
  }

  .disk-container {
    width: 500px;
    height: 500px;
    left: 10%;
  }

  .disk-image {
    width: 700px;
    height: 700px;
  }

  .p-4, .md:p-8 {
    padding: 16px;
    text-align: center;
  }

  /* Adjust text sizes */
  .text-3xl {
    font-size: 1.875rem;
  }

  .text-xl {
    font-size: 1.25rem;
  }
}
  @media (max-width: 860px) {
  .disk-container {
    width: 400px;
    height: 400px;
    left: 20%;
  }

  .disk-image {
    width: 600px;
    height: 600px;
  }

  .text-2xl {
    font-size: 1.25rem; 
  }

  .text-3xl {
    font-size: 1.5rem; 
  }

  .text-4xl {
    font-size: 1.75rem; 

  .text-xl {
    font-size: 1rem; 
  }

  .text-lg {
    font-size: 0.875rem; 
  }

  .p-4 {
    padding: 10px; 
  }

  .md:p-8 {
    padding: 16px; 
  }

  p {
    margin-left: 15px;
    margin-bottom: 15px;
  }

  h2 {
    margin-left: 15px;
    margin-bottom: 12px;
    font-size: 2.25rem !important;
  }
}



  @media (max-width: 750px) {
  .disk-container {
    width: 500px;
    height: 500px;
    position: absolute;
    bottom: 0;
    left: 50%; 
    transform: translateX(-50%); 
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .disk-image {
    width: 500px; 
    height: 500px; 
    top: 35%;
  }

  .w-full {
    flex-direction: column;
  }

  .bg-cover {
    background-image: url('images/about-bg-portrait.jpg') !important;
  }

  .p-4 {
    padding: 16px;
  }

  .text-3xl {
    font-size: 1.875rem;
  }

  .text-xl {
    font-size: 1.25rem;
  }
}

@media (max-width: 500px) {
  .disk-container {
    width: 400px;
    height: 400px;
    position: absolute;
    bottom: 0;
    left: 50%; 
    transform: translateX(-50%); 
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .disk-image {
    width: 400px; 
    height: 400px; 
    top: 35%;
  }

  .w-full {
    flex-direction: column;
  }

  .bg-cover {
    background-image: url('images/about-bg-portrait.jpg') !important;
  }

  .p-4 {
    padding: 16px;
  }

  .text-3xl {
    font-size: 1.875rem;
  }

  .text-xl {
    font-size: 1.25rem;
  }
}


        
      `}</style>
    </section>
  );
}
