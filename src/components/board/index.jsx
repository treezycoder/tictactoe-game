import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import FrontBoard from "./front-board";
import BackBoard from "./back-board";

export default function Board({ winner, squares, handleClick, isDark }) {
  const tiltRef = useRef(null);

  useEffect(() => {
    const tiltBoard = tiltRef.current;
    if (tiltBoard) {
      VanillaTilt.init(tiltBoard, {
        max: 25, // Maximum tilt angle
        speed: 400, // Speed of the effect
        glare: true, // Add glare effect
        "max-glare": 0.5,
      });
    }

    return () => {
      if (tiltBoard) {
        tiltBoard.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <section
      ref={tiltRef}
      id="board"
      style={{
        transformStyle: "preserve-3d",
        perspective: "600px",
        transition: "0.5s",
      }}
      className={`relative  rounded-md  w-[300px] h-[300px] mx-auto mt-8`}
    >
      <FrontBoard
        winner={winner}
        squares={squares}
        handleClick={handleClick}
        isDark={isDark}
      />
      <BackBoard
        winner={winner}
        squares={squares}
        handleClick={handleClick}
        isDark={isDark}
      />
    </section>
  );
}
