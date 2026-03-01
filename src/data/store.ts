export type StoreCategory = "Ранги" | "Валюта" | "Предметы";

export interface StoreItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: StoreCategory;
  imageUrl: string;
  colorHex?: string; // Optional hex color for card glow/accent
}

export const storeCategories: StoreCategory[] = ["Ранги", "Валюта", "Предметы"];

export const storeData: StoreItem[] = [
  // Ранги
  {
    id: "rank-vip",
    name: "VIP Ранг",
    description: "Начальный премиум ранг с доступом к китам, цветным сообщениям в чате и приоритетным входом.",
    price: 150,
    category: "Ранги",
    imageUrl: "/images/store-vip.jpg",
    colorHex: "#facc15" // yellow-400
  },
  {
    id: "rank-premium",
    name: "Premium Ранг",
    description: "Расширенные возможности, включая полет в хабе, уникальные питомцы и префикс [Premium].",
    price: 350,
    category: "Ранги",
    imageUrl: "/images/store-premium.jpg",
    colorHex: "#10b981" // emerald-500
  },
  {
    id: "rank-legend",
    name: "Legend Ранг",
    description: "Легендарный статус. Максимальные привилегии, уникальный косметический шлейф и золотой ник.",
    price: 750,
    category: "Ранги",
    imageUrl: "/images/store-legend.jpg",
    colorHex: "#f59e0b" // premium gold
  },

  // Валюта
  {
    id: "curr-100",
    name: "100 G-Coins",
    description: "Внутриигровая валюта для покупки косметики и бустеров на сервере.",
    price: 50,
    category: "Валюта",
    imageUrl: "/images/store-coins-1.jpg",
    colorHex: "#94a3b8" // slate-400
  },
  {
    id: "curr-500",
    name: "500 G-Coins",
    description: "Хит продаж. Хватит на отличного маунта и пару питомцев.",
    price: 230,
    category: "Валюта",
    imageUrl: "/images/store-coins-2.jpg",
    colorHex: "#facc15"
  },
  {
    id: "curr-2000",
    name: "2000 G-Coins",
    description: "Огромный запас валюты с бонусными 200 монетами в подарок!",
    price: 850,
    category: "Валюта",
    imageUrl: "/images/store-coins-3.jpg",
    colorHex: "#a855f7" // purple-500
  },

  // Предметы
  {
    id: "item-sword",
    name: "Меч 'Раскалывающий'",
    description: "Уникальный скин для меча с огненным эффектом при ударе.",
    price: 120,
    category: "Предметы",
    imageUrl: "/images/store-item-1.jpg",
    colorHex: "#ef4444" // red-500
  },
  {
    id: "item-wings",
    name: "Крылья Дракона",
    description: "Косметические крылья, позволяющие планировать с большой высоты в хабе.",
    price: 300,
    category: "Предметы",
    imageUrl: "/images/store-item-2.jpg",
    colorHex: "#8b5cf6" // violet-500
  },
];
