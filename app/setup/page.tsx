"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useElection } from "@/components/ElectionProvider";
import { Button } from "@/components/ui/Button";
import { defaultCandidates } from "@/data/defaultCandidates";

export default function Setup() {
  const { election } = useElection();

  const [name, setName] = useState(
    election?.name || "国別動物マーク選挙"
  );

  const [description, setDescription] = useState(
    election?.description ||
      "当選してほしい候補の動物マークを選択してください。"
  );

  const [count, setCount] = useState(
    election?.candidates.length || defaultCandidates.length
  );

  const router = useRouter();

  const submit = (event: FormEvent) => {
    event.preventDefault();

    const oldCandidates = election?.candidates || [];

    const candidates = Array.from({ length: count }, (_, index) => {
      if (oldCandidates[index]) {
        return oldCandidates[index];
      }

      if (defaultCandidates[index]) {
        return defaultCandidates[index];
      }

      return {
        id: crypto.randomUUID(),
        name: "",
        animal: "",
        symbol: "",
        order: index,
      };
    });

    localStorage.setItem(
      "mock-election:v1",
      JSON.stringify({
        id: election?.id || crypto.randomUUID(),
        name,
        description,
        status: "SETUP",
        candidates,
        votes: election?.votes || [],
      })
    );

    router.push("/candidates");
  };

  return (
    <div className="narrow">
      <header className="page-heading">
        <span className="step">STEP 01</span>

        <h1>選挙を作成</h1>

        <p>
          実施する選挙の基本情報を入力します。
          初期状態では6つの国と動物マークが設定されています。
        </p>
      </header>

      <form className="panel form" onSubmit={submit}>
        <label>
          選挙名 <b>必須</b>

          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="例：国別動物マーク選挙"
          />
        </label>

        <label>
          説明

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="当選してほしい候補の動物マークを選択してください。"
          />
        </label>

        <label>
          候補者数

          <input
            type="number"
            min="2"
            max="12"
            value={count}
            onChange={(e) => setCount(+e.target.value)}
          />
        </label>

        <Button type="submit">
          候補者設定へ進む
        </Button>
      </form>
    </div>
  );
}
