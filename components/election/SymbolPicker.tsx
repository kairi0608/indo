const symbols = [
  "🦅",
  "🦘",
  "🐺",
  "🐯",
  "🐆",
  "🐕",
  "★",
  "●",
  "▲",
  "■",
  "◆",
  "♥",
  "♣",
  "☀",
  "☂",
  "✈",
  "☎",
  "⚽",
  "🍎",
  "🌸",
  "🌙",
  "🚲",
];

export function SymbolPicker({
  value,
  used,
  onChange,
}: {
  value: string;
  used: string[];
  onChange: (s: string) => void;
}) {
  return (
    <div>
      <div className="symbol-grid">
        {symbols.map((symbol) => (
          <button
            type="button"
            aria-label={`${symbol}を選択`}
            className={`symbol-option ${
              value === symbol ? "selected" : ""
            }`}
            disabled={
              used.includes(symbol) && value !== symbol
            }
            onClick={() => onChange(symbol)}
            key={symbol}
          >
            {symbol}
          </button>
        ))}
      </div>

      {value && used.includes(value) && (
        <p className="error">
          このマークは他の候補者が使用しています
        </p>
      )}
    </div>
  );
}
