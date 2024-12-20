
import { useState } from "react";
import useStore from "../../Zustand/ArticlesStore/useArticlesStore"
export default function Articles() {
    const { articles, incrementLikes } = useStore();
    
    const [selectedType, setSelectedType] = useState("All");
    const filteredArticles = selectedType === "All"
        ? articles
        : articles.filter((article: { articleType: string; }) => article.articleType === selectedType);

    return (
        <section>
            <div className="flex justify-around items-center w-full bg-[#1A1A1A] p-[120px] border border-b-0 border-Black_15
             max-[1440px]:p-[80px] max-[390px]:flex-col max-[390px]:px-[16px] max-[390px]:py-[40px]">
                <div>
                    <p className="bg-[#333333] font-Inter font-medium text-xl text-white py-[6px] px-[10px] w-max my-4 rounded
                    max-[1440px]:text-[16px] max-[1440px]:py-[4px] max-[1440px]:px-[8px] max-[390px]:text-[14px]">A Knowledge Treasure Trove</p>
                    <h1 className="font-Kumbh font-medium text-white text-[58px]
                    max-[1440px]:text-[44px] max-[390px]:text-[28px]">Explore FutureTech's In-Depth Blog Posts</h1>
                </div>
                <div>
                    <button className="flex items-center py-4 px-[18px] rounded-xl bg-[#141414]
                    max-[1440px]:py-[14px] max-[1440px]:px-[16px] max-[390px]:mt-[30px] max-[390px]:w-[358px] max-[390px]:justify-center">View All Blogs <img className=" ml-[10px]" src="/AI-Blog/src/assets/icon/Icon.svg" alt="ArrowUpRight" width="20" height="20" /></button>
                </div>
            </div>
            {/* قسم الفلترة */}
            <div className="border border-b-0 border-Black_15 w-full flex py-[50px] max-[1440px]:py-[40px]">
                <div className="flex flex-wrap justify-evenly items-center w-full">
                    {["All", "Healthcare", "Quantum Computing", "AI Ethics", "Space Exploration", "Biotechnology"].map((type) => (
                        <button
                            key={type}
                            onClick={() => setSelectedType(type)}
                            className={`border border-Black_15 py-[30px] w-[249.33px] text-center rounded-lg mt-[15px] hover:bg-[#1A1A1A]
                         max-[1440px]:w-[201.67px] max-[1440px]:py-[24px] ${selectedType === type
                                    ? "bg-[#1A1A1A]"
                                    : ""
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>
            {/* عرض المقالات */}
            <div className="w-full border border-b-0 border-Black_15">
                {filteredArticles.map((article) => (
                    <div className="w-full flex items-center justify-center h-[369px] border-y-[1px] border-Black_15
                      max-[1440px]:h-[291px] px-[162px]  max-[1440px]:px-20 max-[390px]:h-[420px] max-[390px]:relative max-[390px]:items-start" >
                        <div className="flex items-center w-[384px] 
                          max-[1440px]:w-[305px] max-[390px]:w-[203px] max-[390px]:mt-[96px] max-[390px]:mr-[45px]">
                            <div>
                                <img className="w-20 max-[1440px]:w-[60px] max-[390px]:w-[60px] max-w-none" src={article.profileImage} />
                            </div>
                            <div className="ml-4 max-[1440px]:ml-[10px] max-[390px]:ml-[8px] 
                             max-[390px]:w-[111px]">
                                <p className="font-Inter font-semibold text-xl text-white 
                                  max-[1440px]:text-lg">{article.authorName}</p>
                                <p className="font-Inter font-normal text-lg
                                  max-[1440px]:text-base max-[390px]:text-sm">{article.articleType}</p>
                            </div>
                        </div>
                        <div className="w-[950px] max-[1440px]:w-[768px]  max-[390px]:w-[358px] max-[390px]:absolute max-[390px]:mt-[180px]">
                            <p className="font-Inter font-semibold text-xl mb-[30px]
                              max-[1440px]:text-lg  max-[1440px]:mb-6 max-[390px]:text-base max-[390px]:mb-5">{article.publishDate}</p>
                            <p className="font-Inter font-semibold text-[26px] text-white leading-10 
                              max-[1440px]:text-[22px] max-[390px]:text-lg">{article.title}</p>
                            <p className="font-Inter font-normal text-lg mt-[10px] 
                              max-[1440px]:text-[16px] max-[1440px]:mt-2 max-[390px]:text-sm max-[390px]:mt-1">{article.description}</p>
                            <div className="mt-[30px] flex max-[390px]:mt-5">
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
                                <button className="py-2 px-4 border rounded-full border-Black_15 bg-[#1A1A1A] mr-[10px] flex hover:bg-gray-800 transition"><img src={article.commenticon} />{article.comments}</button>
                                <button className="py-2 px-4 border rounded-full border-Black_15 bg-[#1A1A1A] mr-[10px] flex hover:bg-gray-800 transition"><img src={article.shareicon} />{article.shares}</button>
                            </div>
                        </div>
                        <div>
                            <button className="flex items-center py-4 px-[18px] rounded-xl bg-[#141414]
                             max-[390px]:w-[140px] max-[390px]:mt-[102px]">View Blog <img className=" ml-[10px]" src="/AI-Blog/src/assets/icon/Icon.svg" alt="ArrowUpRight" width="20" height="20" /></button>
                        </div>
                    </div>
                ))}
            </div>

            {/* حالة عدم وجود مقالات */}
            {filteredArticles.length === 0 && (
                <p className="text-center text-gray-500 mt-6">
                    No articles found for "{selectedType}".
                </p>
            )}
        </section>
    );
}
