import { Candidate } from "@/types/election";

export function BallotCandidateCard({
  candidate,
  onSelect,
}: {
  candidate: Candidate;
  onSelect: () => void;
}) {
  return (
    <button
      className="ballot-card"
      onClick={onSelect}
      aria-label={`${candidate.name}・${candidate.animal || ""}に投票`}
    >
      <span className="giant-symbol">
        {candidate.symbol}
      </span>

      <div className="candidate-country">
        {candidate.name}
      </div>

      {candidate.animal && (
        <div className="candidate-animal">
          {candidate.animal}
        </div>
      )}

      <span className="select-label">
        このマークを選ぶ
      </span>
    </button>
  );
}
