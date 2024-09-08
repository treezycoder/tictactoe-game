export default function Stats({ stats, setStats }) {
  return (
    <section id="stats" className="w-[200px] ml-2">
      <h2 className="text-green-400 font-semibold text-xl">Winner Stats</h2>
      <p className="text-green-600">
        Player X: <span className={`ml-[0.20rem]`}>{stats.X}</span>
      </p>
      <p className="text-red-600">
        Player O: <span className={``}>{stats.O}</span>
      </p>
      <button
        onClick={() => setStats({ ...stats, X: 0, O: 0 })}
        className="ring-1 dark:text-blue-900 mt-2 px-4 rounded-md py-2 text-sm shadow-sm mx-auto  hover:bg-blue-500 hover:text-white active:scale-105 hover:ring-2 active:ring-2"
      >
        Reset
      </button>
    </section>
  );
}
