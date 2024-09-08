export default function Controls({
  handlePrev,
  handleRestart,
  winner,
  squares,
  history,
}) {
  return (
    <section
      id="controls"
      className="w-full max-w-[600px] mx-auto mt-10 flex flex-row justify-around "
    >
      <span className="mx-2">
        <button
          disabled={history.length === 0}
          onClick={handlePrev}
          className={`shadow-sm mx-auto ${
            history.length === 0
              ? "cursor-not-allowed"
              : "cursor-pointer active:scale-105 hover:ring-2 active:ring-2  hover:bg-blue-500 hover:text-white"
          } dark:text-blue-900 ring-1  rounded-lg py-2 px-4 `}
        >
          Previous
        </button>
      </span>
      <span className="mx-2 order-last">
        <button
          onClick={handleRestart}
          className="ring-1 cursor-pointer dark:text-blue-900 hover:bg-blue-500 hover:text-white rounded-lg py-2 px-4 active:scale-105 hover:ring-2 active:ring-2"
        >
          Restart
        </button>
      </span>
      <span className="font-mono text-center dark:text-slate-400">
        {winner
          ? `The winner is: ${winner.winner}`
          : squares.every((item) => item != null)
          ? `Draw game!`
          : null}
      </span>
    </section>
  );
}
