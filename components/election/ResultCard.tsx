import { CandidateResult } from "@/lib/election/calculateResult";

export function ResultCard({
  r,
}: {
  r: CandidateResult;
}) {
  return (
    <article
      className={`result-card ${
        r.winner ? "winner" : ""
      }`}
    >
      <span className="rank">
        {r.rank}位
      </span>

      {r.winner && (
        <span className="winner-label">
          当選 · WINNER
        </span>
      )}

      <div className="result-symbol">
        {r.candidate.symbol}
      </div>

      <h2>
        {r.candidate.name}
      </h2>

      {r.candidate.animal && (
        <div className="result-animal">
          {r.candidate.animal}
        </div>
      )}

      <div className="result-numbers">
        <strong>
          {r.votes}票
        </strong>

        <span>
          {r.percentage.toFixed(1)}%
        </span>
      </div>

      <div className="meter">
        <i
          style={{
            width: `${r.percentage}%`,
          }}
        />
      </div>
    </article>
  );
}
