export type ItemKey =
  | "primer"
  | "concealer"
  | "lip"
  | "brow"
  | "exfoliation"
  | "blush"
  | "eyeshadow"
  | "highlight"
  | "mascara"
  | "hairmist";

export type OmikujiResult = {
  mood: string;     // 2026の気分
  focus: string;    // 今年力を入れるべきコスメ（表示名）
  itemKey: ItemKey; // イラスト用キー
  text: string;     // 表示文（約60字）
};

export const results: OmikujiResult[] = [
  {
    mood: "軽やか刷新",
    focus: "ツヤ下地",
    itemKey: "primer",
    text: "2026は“軽やか刷新”。力を入れるのはツヤ下地。薄膜のツヤで肌の機嫌を上げて。",
  },
  {
    mood: "芯の透明感",
    focus: "コンシーラー",
    itemKey: "concealer",
    text: "2026は“芯の透明感”。狙うはコンシーラー。隠すより整えて、抜け感の肌へ。",
  },
  {
    mood: "攻めの余白",
    focus: "リップ",
    itemKey: "lip",
    text: "2026は“攻めの余白”。主役はリップ。一本で顔が決まる色をお守りにしよう。",
  },
  {
    mood: "静かな自信",
    focus: "眉メイク",
    itemKey: "brow",
    text: "2026は“静かな自信”。眉メイク強化が吉。形より毛流れ、柔らかく整えて。",
  },
  {
    mood: "整う年",
    focus: "角質ケア",
    itemKey: "exfoliation",
    text: "2026は“整う年”。スキンケアは角質ケアに注力。やりすぎず週1で更新。",
  },
  {
    mood: "ほの甘ムード",
    focus: "チーク",
    itemKey: "blush",
    text: "2026は“ほの甘ムード”。チークに投資。血色は点じゃなく広く薄くが正解。",
  },
  {
    mood: "ミニマル映え",
    focus: "単色シャドウ",
    itemKey: "eyeshadow",
    text: "2026は“ミニマル映え”。アイシャドウは単色。陰影ひとつで大人っぽく。",
  },
  {
    mood: "夜明けのきらめき",
    focus: "ハイライト",
    itemKey: "highlight",
    text: "2026は“夜明けのきらめき”。ハイライトが鍵。頬骨より目頭に少しが◎。",
  },
  {
    mood: "しなやか反撃",
    focus: "マスカラ",
    itemKey: "mascara",
    text: "2026は“しなやか反撃”。マスカラ強化。束感よりセパレートで目力更新。",
  },
  {
    mood: "やさしい強さ",
    focus: "ヘアミスト",
    itemKey: "hairmist",
    text: "2026は“やさしい強さ”。香りに力を。ヘアミストで近距離の印象を仕上げて。",
  },
];