import { useParams } from "react-router-dom";
import useStore from "../../../Zustand/ArticlesStore/useArticlesStore";
import NotFoundPage from "../../../Pages/NotFoundPage";

const HeaderArticle = () => {
  const { id } = useParams();
  const getArticleById = useStore((state) => state.getArticleById);

  if (!id) {
    return <NotFoundPage />;
  }

  const article = getArticleById(parseInt(id));

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <div className="relative flex items-center justify-center text-center">
      <h2 className="font-Inter text-[64px] font-semibold text-white absolute top-3/4 
       max-[1440px]:text-[44px] max-[900px]:text-[28px] max-[600px]:top-2/4">{article.title}</h2>
      <img src={article.articleImage} alt={article.title} className="w-full h-[598px] object-cover bg-linear-gradient
      max-[1440px]:h-[439px] max-[900px]:h-[281px]" />
    </div>
  );
};

export default HeaderArticle