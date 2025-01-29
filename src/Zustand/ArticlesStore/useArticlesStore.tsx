import { create } from "zustand";
import { articles, Article, ArticleSection, articleSection } from "./ArticlesData";
import { useEffect } from "react";

interface ArticleStore {
  articles: Article[];
  articleSection: ArticleSection[];
  filteredArticle: Article[],
  currentArticle: Article | null;
  similarResults: Article[];
  getArticleById: (id: number) => Article | undefined;
  incrementLikes: (id: number) => void;
  setCurrentArticle: (article: Article) => void;
  filterByType: (articleType: string) => void;
}

const useStore = create<ArticleStore>((set) => ({
  articles: articles,
  articleSection: articleSection,
  filteredArticle: articles,
  currentArticle: null,
  similarResults: [],
  getArticleById: (id: number) => {
    return articles.find((article) => article.id === id);
  },
  incrementLikes: (id: number) => {
    set((state) => {
      const updatedArticles = [...state.articles];
      for (let i = 0; i < updatedArticles.length; i++) {
        if (updatedArticles[i].id === id) {
          updatedArticles[i].likes = updatedArticles[i].likes - 1 ? updatedArticles[i].likes + 1 : 0;
          break;
        }
      }
      return { articles: updatedArticles };
    });
  },
  setCurrentArticle: (article) => {
    set({ currentArticle: article });
  },

  filterByType: (articleType) => {
    set((state) => {
      if (articleType === 'All') {
        return { filteredArticle: [...state.articles] };
      } else {
        return {
          filteredArticle: state.articles.filter((article) =>
            article.articleType.toLowerCase().includes(articleType.toLowerCase())
          ),
        };
      }
    });
  },
}));
export const useSyncSimilarArticles = () => {
  const { currentArticle, articles } = useStore();

  useEffect(() => {
    if (currentArticle) {
      const similar = articles.filter(
        (a) => a.id !== currentArticle.id && a.articleType.toLowerCase() === currentArticle.articleType.toLowerCase()
      );
      useStore.setState({ similarResults: similar.slice(0, 3) });
    }
  }, [currentArticle, articles]);
};
export default useStore;
