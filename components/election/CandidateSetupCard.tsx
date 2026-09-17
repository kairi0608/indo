import { Candidate } from "@/types/election";
import { SymbolPicker } from "./SymbolPicker";

export function CandidateSetupCard({
  candidate,
  used,
  onChange,
}: {
  candidate: Candidate;
  used: string[];
  onChange: (candidate: Candidate) => void;
}) {
  return (
    <section className="panel candidate-setup">
      <div className="number">
        候補 {candidate.order + 1}
      </div>

      <label>
        国名

        <input
          value={candidate.name}
          onChange={(e) =>
            onChange({
              ...candidate,
              name: e.target.value,
            })
          }
          placeholder="例：インド"
        />
      </label>

      <label>
        動物名

        <input
          value={candidate.animal || ""}
          onChange={(e) =>
            onChange({
              ...candidate,
              animal: e.target.value,
            })
          }
          placeholder="例：ベンガルトラ"
        />
      </label>

      <label>
        説明（任意）

        <textarea
          value={candidate.description || ""}
          onChange={(e) =>
            onChange({
              ...candidate,
              description: e.target.value,
            })
          }
        />
      </label>

      <label>マークを選択</label>

      <SymbolPicker
        value={candidate.symbol}
        used={used}
        onChange={(symbol) =>
          onChange({
            ...candidate,
            symbol,
          })
        }
      />
    </section>
  );
}
