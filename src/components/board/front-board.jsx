import Square from "../square";

export default function FrontBoard({ winner, squares, handleClick, isDark }) {
  return (
    <div
      id="front-board"
      style={{
        backfaceVisibility: "hidden",
        transform: `${isDark ? "rotateX(-180deg)" : "rotateX(0deg)"}`,
        transition: "0.5s",
      }}
      className={`absolute top-0 left-0 w-full h-full shadow-md rounded-md border-2 border-black/20 dark:border bg-black/50 backdrop-blur`}
    >
      {Array.from({ length: 3 }, (_, row) => (
        <div key={row} className="flex h-[33.33%]">
          {Array.from({ length: 3 }, (_, col) => (
            <Square
              key={row * 3 + col}
              keyId={row * 3 + col}
              color={
                winner && winner.winnerLine.includes(row * 3 + col)
                  ? "text-red-400"
                  : "text-slate-100"
              }
              content={squares[row * 3 + col]}
              onClick={() => handleClick(row * 3 + col)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
