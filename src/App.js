import "./App.css";
import { useEffect, useState } from "react";
import Stats from "./components/stats";
import Board from "./components/board";
import Controls from "./components/controls";
import ThemeIcon from "./components/theme-icon";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [next, setNext] = useState("X");
  const [history, setHistory] = useState([]);
  const [isDark, setisDark] = useState(false);
  const [winnerStats, setWinnerStats] = useState({
    X: 0,
    O: 0,
  });

  useEffect(() => {
    const storedStats = localStorage.getItem("stats");
    console.log(storedStats, "stat");

    // If stats exist in localStorage, set them to state
    if (storedStats) {
      setWinnerStats(JSON.parse(storedStats));
    }
  }, []);

  // Save to localStorage whenever winnerStats changes
  useEffect(() => {
    localStorage.setItem("stats", JSON.stringify(winnerStats));
    return () => {
      localStorage.setItem("stats", JSON.stringify(winnerStats));
    };
  }, [winnerStats]);

  function handleClick(currentIndex) {
    if (winner) return;
    if (squares[currentIndex] !== null) return;
    let prevSquares = [...squares];
    if (next === "X") {
      prevSquares[currentIndex] = "X";
    } else {
      prevSquares[currentIndex] = "O";
    }
    setSquares(prevSquares);
    setNext(next === "X" ? "O" : "X");
    setHistory([...history, prevSquares]);
  }

  function handlePrev() {
    if (history.length > 1) {
      setNext(next === "X" ? "O" : "X");
      const prevHistory = [...history].slice(0, history.length - 1);
      setSquares(prevHistory[prevHistory.length - 1]);
      setHistory(prevHistory);
    } else {
      setSquares(Array(9).fill(null));
      setHistory([]);
    }
  }

  function handleRestart() {
    if (winner && winner.winner === "X") {
      setWinnerStats({ ...winnerStats, X: winnerStats.X + 1 });
    }
    if (winner && winner.winner === "O") {
      setWinnerStats({ ...winnerStats, O: winnerStats.O + 1 });
    }
    setSquares(Array(9).fill(null));
    setHistory([]);
    setNext("X");
  }

  function calculateWinner(winnerSquares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        winnerSquares[a] &&
        winnerSquares[a] === winnerSquares[b] &&
        winnerSquares[a] === winnerSquares[c]
      ) {
        return {
          winnerLine: lines[i],
          winner: winnerSquares[a],
        };
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  console.log(isDark);
  return (
    <div
      id="body"
      className={`w-screen h-screen ${
        isDark ? "dark" : ""
      } dark:bg-black bg-gray-100`}
    >
      <ThemeIcon isDark={isDark} setIsDark={setisDark} />
      <Stats stats={winnerStats} setStats={setWinnerStats} />
      <Board
        winner={winner}
        squares={squares}
        handleClick={handleClick}
        isDark={isDark}
      />
      <Controls
        winner={winner}
        squares={squares}
        history={history}
        handlePrev={handlePrev}
        handleRestart={handleRestart}
      />
    </div>
  );
}

export default App;
