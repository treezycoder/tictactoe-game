import Square from "../square";

export default function BackBoard({ winner, squares, handleClick, isDark }) {
  return (
    <div
      id="back-board"
      style={{
        backfaceVisibility: "hidden",
        transform: `${isDark ? "rotateX(0deg)" : "rotateX(180deg)"}`,
        transition: "0.5s",
      }}
      className={`absolute top-0 left-0 w-full h-full shadow-md shadow-white/20 rounded-md border-2 dark:border-gray-500 bg-white/10 backdrop-blur`}
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
                  : "text-black dark:text-slate-400"
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
