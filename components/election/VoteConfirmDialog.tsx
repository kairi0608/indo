import * as Dialog from "@radix-ui/react-dialog";
import { Candidate } from "@/types/election";
import { Button } from "@/components/ui/Button";

export function VoteConfirmDialog({
  candidate,
  onBack,
  onConfirm,
  busy,
}: {
  candidate: Candidate;
  onBack: () => void;
  onConfirm: () => void;
  busy: boolean;
}) {
  return (
    <Dialog.Root
      open
      onOpenChange={(open) => {
        if (!open) onBack();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="overlay" />

        <Dialog.Content className="dialog">
          <Dialog.Title>
            このマークに投票しますか？
          </Dialog.Title>

          <div className="confirm-symbol">
            {candidate.symbol}
          </div>

          <h2>{candidate.name}</h2>

          {candidate.animal && (
            <div className="confirm-animal">
              {candidate.animal}
            </div>
          )}

          <p>
            このマークを選択して投票します。
            確定後は取り消せません。
          </p>

          <div className="dialog-actions">
            <Button
              onClick={onBack}
              disabled={busy}
              className="secondary"
            >
              戻る
            </Button>

            <Button
              onClick={onConfirm}
              disabled={busy}
            >
              {busy
                ? "記録中…"
                : "このマークに投票する"}
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
