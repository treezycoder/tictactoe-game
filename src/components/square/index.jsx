export default function Square({ color, content, onClick, keyId }) {
  return (
    <button
      key={keyId}
      onClick={onClick}
      className={`${color} font-bold border border-black/20 dark:border-gray-500 flex-1`}
    >
      {content}
    </button>
  );
}
