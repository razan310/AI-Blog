import { useEffect } from "react";
import useStore, { useSyncSimilarArticles } from "../../../Zustand/ArticlesStore/useArticlesStore"
import { useParams } from "react-router-dom";
import NotFoundPage from "../../../Pages/NotFoundPage";
import NoData from "../../NoData/NoData";


const SimilarNews = () => {

  const { id } = useParams();
  const { articles, currentArticle, setCurrentArticle, similarResults, incrementLikes } = useStore();

  useSyncSimilarArticles();

  useEffect(() => {
    const article = articles.find((a) => a.id === Number(id));
    if (article) {
      setCurrentArticle(article);
    }
  }, [id, articles, setCurrentArticle]);

  if (!currentArticle) return <NotFoundPage />;
  return (
    <section className="bg-[#1A1A1A] container-padding py-[60px]">
      <div className=" text-white py-8  ">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Similar News</h2>
          <button className="flex items-center py-4 px-[18px] rounded-xl bg-[#141414] w-auto
          max-[1440px]:py-[14px] max-[1440px]:px-[16px]  max-[500px]:justify-center ">View All News<img className=" ml-[10px]" src="/AI-Blog/src/assets/icon/Icon.svg" alt="ArrowUpRight" width="20" height="20" /></button>
        </div>
      </div>

      {similarResults.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {similarResults.map((article) => (
            <div key={article.id} className="bg-[#1A1A1A] rounded-xl overflow-hidden ">
              <img src={article.articleImage} alt={article.title} className="w-full h-40 object-cover" />
              <div className="pt-4">
                <h3 className="text-lg font-bold">{article.title}</h3>
                <p className="text-sm text-gray-400">{article.articleType}</p>

                <div className="flex items-center justify-between mt-4  ">
                  <div className="flex items-center gap-3">
                  <button className="py-2 px-4 border rounded-full border-Black_15 bg-[#1A1A1A] mr-[10px] flex hover:bg-gray-800" onClick={() => incrementLikes(article.id)}><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    className={`transition ${article.likes > 0
                                        ? "fill-[#FF5500]"
                                        : ""
                                        }`}>
                                    <path d="M11.645 21.4107L11.6384 21.4071L11.6158 21.3949C11.5965 21.3844 11.5689 21.3693 11.5336 21.3496C11.4629 21.3101 11.3612 21.2524 11.233 21.1769C10.9765 21.0261 10.6132 20.8039 10.1785 20.515C9.31074 19.9381 8.15122 19.0901 6.9886 18.0063C4.68781 15.8615 2.25 12.6751 2.25 8.75C2.25 5.82194 4.7136 3.5 7.6875 3.5C9.43638 3.5 11.0023 4.29909 12 5.5516C12.9977 4.29909 14.5636 3.5 16.3125 3.5C19.2864 3.5 21.75 5.82194 21.75 8.75C21.75 12.6751 19.3122 15.8615 17.0114 18.0063C15.8488 19.0901 14.6893 19.9381 13.8215 20.515C13.3868 20.8039 13.0235 21.0261 12.767 21.1769C12.6388 21.2524 12.5371 21.3101 12.4664 21.3496C12.4311 21.3693 12.4035 21.3844 12.3842 21.3949L12.3616 21.4071L12.355 21.4107L12.3523 21.4121C12.1323 21.5289 11.8677 21.5289 11.6477 21.4121L11.645 21.4107Z" stroke="#666666" stroke-width="1.5" stroke-linejoin="round"
                                        className={` ${article.likes > 0
                                            ? "stroke-[#FF5500]"
                                            : ""
                                            }`} />
                                </svg>
                                    <span>{article.likes}</span>
                                </button>
                                <button className="py-2 px-4 border rounded-full border-Black_15 bg-[#1A1A1A] mr-[10px] flex hover:bg-gray-800 transition"><img src={article.shareicon} />{article.shares}</button>
                  </div>
                  <button className="flex items-center justify-center py-[14px] px-[18px] rounded-xl bg-[#141414] w-auto
                    max-[1440px]:py-[14px] max-[1440px]:px-[16px]  max-[500px]:justify-center">Read More<img className=" ml-[10px]" src="/AI-Blog/src/assets/icon/Icon.svg" alt="ArrowUpRight" width="20" height="20" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* حالة عدم وجود مقالات */}
      {similarResults.length === 0 && (
                <NoData message="No Similar Articles Found" />
            )}
    </section>
  )
}

export default SimilarNews