import { create } from "zustand";
import { articles, Article } from "./ArticlesData";

interface ArticleStore {
  articles: Article[];
  getArticleById: (id: string) => Article | undefined;
  incrementLikes: (id: string) => void;
}

const useStore = create<ArticleStore>((set) => ({
  articles: articles,
  getArticleById: (id: string) => {
    return articles.find((article) => article.id === id);
  },
  incrementLikes: (id: string) => {
    set((state) => ({
      articles: state.articles.map((article) =>
        article.id === id
          ? { ...article, likes: article.likes - 1 ? article.likes + 1 : 0}
          : article
      ),
    }));
  },
}));

export default useStore;
