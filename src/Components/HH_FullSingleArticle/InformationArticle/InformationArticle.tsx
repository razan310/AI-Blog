
import { useParams } from "react-router-dom";
import useStore from "../../../Zustand/ArticlesStore/useArticlesStore";
import { useState } from "react";
import NoData from "../../NoData/NoData";

const InformationArticle = () => {
  const { id } = useParams();

  const { incrementLikes, getArticleById } = useStore();
  const [showFullText, setShowFullText] = useState(false);
  if (!id) {
    return <NoData message="No Articles Found" />;
  }
  const article = getArticleById(parseInt(id));

  if (!article) {
    return <NoData message="No Articles Found" />;
  }
  const toggleFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <section className="w-full bg-[#1A1A1A] flex border-b-2 border-t-2 border-Black_15 px-[162px]
     max-[1440px]:px-20 max-lg:flex max-lg:flex-col-reverse max-lg:px-4">
      <div className=" w-3/5 border-r-2 border-Black_15 pr-20 
       max-lg:w-full max-lg:border-r-0 max-lg:px-4">
        <div className="py-[80px] border-b-2 border-Black_15 max-lg:text-sm">
          <div>
            <h1 className=" font-Inter text-xl font-medium mb-[14px] text-white
             max-[1440px]:mb-[6px] max-lg:text-sm">introduction</h1>
            <p className="font-Inter font-normal text-lg
            max-[1440px]:text-base max-lg:text-sm">{article.introduction}</p>
          </div>
        </div>
        <div className={`overflow-hidden relative flex flex-col items-center ${showFullText ? 'h-max' : ' max-[1440px]:h-[635px] h-[908px]'}`}>
          {article.sections.map((section, index) => (
            <div key={index} className="mb-6 pt-20">
              <h2 className="font-Inter text-[28px] font-medium mb-6 text-white
              max-[1440px]:text-[22px] max-[1440px]:mb-5 max-lg:text-sm">{section.title}</h2>
              <p className="font-Inter font-normal text-lg mb-6
              max-[1440px]:text-base max-[1440px]:mb-5 max-lg:text-sm">{section.content}</p>
              <p className="font-Inter font-normal text-lg
              max-[1440px]:text-base max-[1440px]:mb-5 max-lg:text-sm">{section.content}</p>
            </div>
          ))}
          <div className={`${showFullText ? 'hidden' : 'absolute w-full left-0 h-[215px] bottom-0 ! bg-linear-gradient'}`}></div>
          <button
            onClick={() => toggleFullText()}
            className={`${showFullText ? 'mb-4' : 'absolute w-max bottom-[8%] z-999'} font-inter text-lg bg-[#141414] py-[14px] px-6 border border-Black_15 rounded-xl flex justify-center items-center`}>
            {showFullText ? 'Read Less' : 'Read Full Blog'}
            <img src={article.arrowicon} className={`${showFullText ? 'transform rotate-180' : ''} ml-1`} />
          </button>
        </div>
      </div>
      <div className=" w-2/5  max-lg:w-full">
        <div className="py-[50px] px-20 flex items-center border-b-2 border-Black_15 max-[500px]:mt-5
        max-[1440px]:py-[40px] max-[1440px]:px-[60px] max-[500px]:px-4">
          <button className="py-[10px] px-6 items-center border rounded-full border-Black_15 bg-[#1A1A1A] mr-[10px] flex hover:bg-gray-800
           max-[1440px]:py-2 max-[1440px]:px-[14px]" onClick={() => incrementLikes(article.id)}><svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"
              className={`w-[34px] h-[34px] max-[1440px]:w-[24px] max-[1440px]:h-[24px] ${article.likes > 0
                ? "fill-[#FF5500]"
                : ""
                }`}>
              <path d="M11.645 21.4107L11.6384 21.4071L11.6158 21.3949C11.5965 21.3844 11.5689 21.3693 11.5336 21.3496C11.4629 21.3101 11.3612 21.2524 11.233 21.1769C10.9765 21.0261 10.6132 20.8039 10.1785 20.515C9.31074 19.9381 8.15122 19.0901 6.9886 18.0063C4.68781 15.8615 2.25 12.6751 2.25 8.75C2.25 5.82194 4.7136 3.5 7.6875 3.5C9.43638 3.5 11.0023 4.29909 12 5.5516C12.9977 4.29909 14.5636 3.5 16.3125 3.5C19.2864 3.5 21.75 5.82194 21.75 8.75C21.75 12.6751 19.3122 15.8615 17.0114 18.0063C15.8488 19.0901 14.6893 19.9381 13.8215 20.515C13.3868 20.8039 13.0235 21.0261 12.767 21.1769C12.6388 21.2524 12.5371 21.3101 12.4664 21.3496C12.4311 21.3693 12.4035 21.3844 12.3842 21.3949L12.3616 21.4071L12.355 21.4107L12.3523 21.4121C12.1323 21.5289 11.8677 21.5289 11.6477 21.4121L11.645 21.4107Z" stroke="#666666" stroke-width="1.5" stroke-linejoin="round"
                className={` ${article.likes > 0
                  ? "stroke-[#FF5500]"
                  : ""
                  }`} />
            </svg>
            <span className=" font-Kumbh text-lg font-normal ml-1
             max-[1440px]:text-sm">{article.likes}</span>
          </button>
          <button className="py-[10px] px-6 items-center border rounded-full border-Black_15 bg-[#1A1A1A] mr-[10px] flex hover:bg-gray-800 transition max-[1440px]:py-2 max-[1440px]:px-[14px]"><img className="!w-[34px] h-[34px] max-w-none max-[1440px]:w-[24px] max-[1440px]:h-[24px]" src={article.viewsicon} /><span className=" font-Kumbh text-lg font-normal ml-1 max-[1440px]:text-sm">{article.views}</span></button>
          <button className="py-[10px] px-6 items-center border rounded-full border-Black_15 bg-[#1A1A1A] mr-[10px] flex hover:bg-gray-800 transition max-[1440px]:py-2 max-[1440px]:px-[14px]"><img className="!w-[34px] h-[34px] max-w-none max-[1440px]:w-[24px] max-[1440px]:h-[24px]" src={article.shareicon} /><span className=" font-Kumbh text-lg font-normal ml-1 max-[1440px]:text-sm">{article.shares}</span></button>
        </div>
        <div className="w-full flex items-center h-auto pt-20 pl-20 max-lg:pl-4">
          <div className="w-3/6">
            <h1 className="font-Inter font-normal text-lg max-[1440px]:text-base">Publication Date</h1>
            <p className="font-Inter font-medium text-lg text-white mt-[10px] max-[1440px]:text-base max-[1440px]:mt-[6px]">{article.publishDate}</p>
            <h1 className="font-Inter font-normal text-lg mt-[30px] max-[1440px]:text-base max-[1440px]:mt-[20px]">Reading Time</h1>
            <p className="font-Inter font-medium text-lg text-white mt-[10px] max-[1440px]:text-base max-[1440px]:mt-[6px]">{article.readingTime}</p>
          </div>
          <div className="w-3/6">
            <h1 className="font-Inter font-normal text-lg max-[1440px]:text-base">Category</h1>
            <p className="font-Inter font-medium text-lg text-white mt-[10px] max-[1440px]:text-base max-[1440px]:mt-[6px]">{article.articleType}</p>
            <h1 className="font-Inter font-normal text-lg mt-[30px] max-[1440px]:text-base max-[1440px]:mt-[20px]">Author Name</h1>
            <p className="font-Inter font-medium text-lg text-white mt-[10px] max-[1440px]:text-base max-[1440px]:mt-[6px]">{article.authorName}</p>
          </div>
        </div>
        <div className="pt-[50px] pl-20 max-lg:pl-4">
          <h1 className="font-Inter font-normal text-lg">Table of Contents</h1>
          <div className="mt-4 w-full border-none rounded-xl bg-Black_15 ">
            <ul className="list-disc">
              <li className="font-inter text-sm md:text-base 2xl:text-lg font-medium text-white py-5 pr-5 ml-9">Introduction</li>
              {article.sections.map((section, index) => {
                return (
                  <li key={index} className="font-inter text-sm md:text-base 2xl:text-lg font-medium text-white py-5 pr-5 ml-9">{section.title}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationArticle;
