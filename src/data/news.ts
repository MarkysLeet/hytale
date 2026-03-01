export type NewsTag = "Обновление" | "Ивент" | "Новости";

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tag: NewsTag;
  imageUrl: string;
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: "Глобальное Обновление 2.0",
    excerpt: "Новые данжи, измененный баланс классов и улучшенная генерация мира уже ждут вас.",
    date: "12 Октября 2023",
    tag: "Обновление",
    imageUrl: "/images/news-1.jpg", // Placeholder path
  },
  {
    id: "2",
    title: "Хэллоуинский Ивент 'Тени Прошлого'",
    excerpt: "Собирайте тыквы, сражайтесь с уникальными боссами и получайте эксклюзивные награды.",
    date: "25 Октября 2023",
    tag: "Ивент",
    imageUrl: "/images/news-2.jpg",
  },
  {
    id: "3",
    title: "Открытие нового сезона Арены",
    excerpt: "Сразитесь за звание лучшего гладиатора Project G и получите уникальный титул.",
    date: "05 Ноября 2023",
    tag: "Новости",
    imageUrl: "/images/news-3.jpg",
  },
];
