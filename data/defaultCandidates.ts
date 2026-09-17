import { Candidate } from "@/types/election";

export const defaultCandidates: Candidate[] = [
  {
    id: "usa",
    name: "アメリカ",
    animal: "ハクトウワシ",
    symbol: "🦅",
    description: "ハクトウワシをマークとする候補",
    order: 0,
  },
  {
    id: "australia",
    name: "オーストラリア",
    animal: "アカカンガルー",
    symbol: "🦘",
    description: "アカカンガルーをマークとする候補",
    order: 1,
  },
  {
    id: "estonia",
    name: "エストニア",
    animal: "ハイイロオオカミ",
    symbol: "🐺",
    description: "ハイイロオオカミをマークとする候補",
    order: 2,
  },
  {
    id: "india",
    name: "インド",
    animal: "ベンガルトラ",
    symbol: "🐯",
    description: "ベンガルトラをマークとする候補",
    order: 3,
  },
  {
    id: "saudi-arabia",
    name: "サウジアラビア",
    animal: "アラビアヒョウ",
    symbol: "🐆",
    description: "アラビアヒョウをマークとする候補",
    order: 4,
  },
  {
    id: "japan",
    name: "日本",
    animal: "シバイヌ",
    symbol: "🐕",
    description: "シバイヌをマークとする候補",
    order: 5,
  },
];
