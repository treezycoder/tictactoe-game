export default function ThemeIcon({ isDark, setIsDark }) {
  return (
    <span
      onClick={() => setIsDark(!isDark)}
      className="group float-right mt-8 mr-8 cursor-pointer"
    >
      <svg
        style={{ transition: "all 0.5s ease-in-out" }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="gray"
        className={`group-active:scale-110 group-hover:scale-105 size-10 transform ${
          !isDark
            ? "fill-gray-900 stroke-gray-600 group-hover:fill-gray-800" // Dark theme effect
            : "fill-yellow-200 stroke-yellow-400 group-hover:fill-yellow-300" // Light theme effect
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>
    </span>
  );
}
