import React from "react";
import useBookStore from "../../Zustand/BooksStore/useBooksStore";
import { Link } from "react-router-dom";
import UserList from "../RK_UserList/UserList";
import profile1 from "./../../assets/images/HomePage/Profile10.png";
import profile2 from "./../../assets/images/HomePage/Profile11.png";
import profile3 from "./../../assets/images/HomePage/Profile9.png";
import profile4 from "./../../assets/images/HomePage/Profile7.png";

const BookSection: React.FC = () => {
  const { books } = useBookStore();



  return (
    <section>
      <div className="flex justify-around items-center w-full bg-Black_15 py-[120px] border border-b-0 border-Black_15 container-padding
             max-[1440px]:p-[80px] max-[500px]:flex-col max-[500px]:px-[16px] max-[500px]:py-[40px]">
        <div>
          <p className="bg-[#333333] font-Inter font-medium text-xl text-white py-[6px] px-[10px] w-max my-4 rounded
                    max-[1440px]:text-[16px] max-[1440px]:py-[4px] max-[1440px]:px-[8px] max-[500px]:text-[14px]">Your Gateway to In-Depth Information</p>
          <h1 className="font-Kumbh font-medium text-white text-[58px]
                    max-[1440px]:text-[44px] max-[500px]:text-[28px]">Unlock Valuable Knowledge with FutureTech's Resources</h1>
        </div>
        <div>
          <button className="flex items-center py-4 px-[18px] rounded-xl bg-[#141414] w-52
                    max-[1440px]:py-[14px] max-[1440px]:px-[16px] max-[500px]:mt-[30px] max-[500px]:w-[358px] max-[500px]:justify-center max-[390px]:w-[262px]">View All Resources<img className=" ml-[10px]" src="/AI-Blog/src/assets/icon/Icon.svg" alt="ArrowUpRight" width="20" height="20" /></button>
        </div>
      </div>
      <div className="container-padding">
        {books.map((book) => (
          <div
            key={book.id}
            className="flex flex-col xl:flex-row items-center border-b-2 border-Black_15"
          >
            <div className="xl:w-1/3 pr-20  py-[155px] flex-1 flex flex-col  border-r-2 border-Black_15 
            max-[1536px]:py-[150.5px] max-[1536px]:pr-[60px] max-[1280px]:border-r-0 max-[1280px]:py-[40px] max-[500px]:pr-0">
              <img src={book.logo} alt={book.logoTitle} className="mb-[50px] w-20
              max-[1536px]:w-[60px] max-[500px]:w-[50px] max-[500px]:mb-6"/>
              <h2 className="font-Kumbh font-semibold text-[40px] text-white 
              max-[1536px]:text-[30px] max-[500px]:text-2xl">{book.logoTitle}</h2>
              <p className="font-Inter font-normal text-xl mt-4
              max-[1536px]:text-base max-[500px]:text-sm max-[500px]:mt-1">{book.logoDescription}</p>
              <div>
                <Link to={book.downloadLink}>
                  <button className="flex items-center justify-center py-4 px-[18px] rounded-xl bg-[#141414] w-full my-[55px]
                  max-[500px]:mt-6 max-[500px]:mb-5 max-[500px]:py-[18px]">Download Now<img className=" ml-[10px]" src="/AI-Blog/src/assets/icon/Icon.svg" alt="ArrowUpRight" width="20" height="20" /></button>
                </Link>
              </div>
              <div className="flex items-center py-8 px-[30px] w-max bg-[#141414] border border-Black_15 rounded-[13px]
              max-[1536px]:p-5 max-[500px]:py-[23px] max-[380px]:flex-col max-[380px]:items-start max-[380px]:py-[10px] max-[380px]:p-16">
                <div className="pr-[50px] max-[1536px]:pr-[30px] max-[380px]:mb-2 max-[380px]:pr-0">
                  <p className="font-Inter font-normal text-lg 
                  max-[1536px]:text-sm">Downloaded By</p>
                  <p className="font-Inter font-semibold text-2xl text-white
                  max-[1536px]:text-xl max-[500px]:text-lg">10k + Users</p>
                </div>
                <div className="bg-Black_15 p-[10px] border border-Black_15 rounded-xl max-[1536px]:p-2">
                  <UserList
                    profile1={profile1}
                    profile2={profile2}
                    profile3={profile3}
                    profile4={profile4}
                  />
                </div>
              </div>
            </div>
            <div className="xl:w-2/3 py-20 pl-20 
            max-[1536px]:py-[60px] max-[1536px]:pl-[60px] max-[767px]:py-[30px] max-[767px]:pl-[0px]">
              <div className="flex items-center justify-between w-full 
              max-[500px]:flex-col max-[500px]:items-start">
                <h3 className="text-2xl font-semibold text-white 
                max-[1536px]:text-xl max-[500px]:text-lg max-[500px]:mb-[10px]">{book.bookTitle}</h3>
                <p className="text-lg font-normal w-[65%] 
                max-[1536px]:text-base max-[500px]:w-full max-[500px]:text-sm">{book.bookDescription}</p>
              </div>
              <div>
              <img
                src={book.bookImage}
                alt={book.bookTitle}
                className="rounded-lg my-[30px] w-full
                max-[1536px]:my-6"
              />
              </div>
              <div className="flex items-center justify-between w-full
              max-[500px]:flex-col">
                <div className="mr-5 p-[30px] bg-[#141414] border border-Black_15 rounded-[13px] w-2/5 
                max-[1536px]:p-6 max-[1536px]:w-[45%] max-[500px]:w-full max-[500px]:mr-0 max-[500px]:p-5">
                  <span className="font-Inter font-normal text-lg
                  max-[1536px]:text-base max-[500px]:text-sm">{book.titletotalBooks}</span>
                  <p className="font-Inter font-semibold text-xl text-white mt-1
                  max-[1536px]:text-lg max-[500px]:text-base">{book.totalBooks}</p>  
                </div>
                <div className="flex items-center justify-between w-full p-[30px] bg-[#141414] border border-Black_15 rounded-[13px]
                max-[1536px]:p-6 max-[500px]:p-5 max-[500px]:my-6">
                  <div>
                  <span className="font-Inter font-normal text-lg
                  max-[1536px]:text-base max-[500px]:text-sm">Download Formats</span>
                  <p className="font-Inter font-semibold text-xl text-white mt-1
                  max-[1536px]:text-lg max-[500px]:text-base">{book.DownloadFormats}</p>  
                  </div>
                  <div>
                    <button className="flex items-center py-[18px] px-6 border border-Black_15 rounded-[10px] bg-[#1a1a1a] font-Inter font-normal text-lg
                    max-[1536px]:py-[14px] max-[1536px]:px-5 max-[1536px]:text-sm">Preview<img src={book.viewsicon} className="ml-[10px]"/></button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center flex-col w-full p-[30px] mt-[30px] bg-[#141414] border border-Black_15 rounded-[13px]
              max-[1536px]:p-6 max-[1536px]:mt-6 max-[500px]:mt-0 max-[500px]:p-5">
                <span className="font-Inter font-normal text-lg
                max-[1536px]:text-base max-[500px]:text-sm">Average Author Expertise</span>
                <p className="font-Inter font-medium text-xl text-white mt-1
                max-[1536px]:text-lg max-[500px]:text-base">{book.authorRating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default BookSection;
