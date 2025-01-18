import icon1 from "./../../assets/icon/Icon(12).svg";
import icon2 from "./../../assets/icon/Icon(13).svg";
import icon3 from "./../../assets/icon/Icon(14).svg";
import icon4 from "./../../assets/icon/Icon.svg";
const Footer = () => {
  return (
    <>
      <div className="container-padding px-[40px] py-20 bg-[#141414] lg:max-h-[567px] w-fill  ">
        <div className="lg:pt-8 grid grid-cols-1 ">
          <div className=" gap-20 lg:max-h-[464px] grid xl:grid-cols-5 md:grid-cols-3 sm:grid grid-cols-2  ">
            <div>
              <h4 className="text-xl text-white font-medium font-Inter mb-[36px] hover:text-myYellow">
                Home
              </h4>
              <p className="text-[#666666] text-lg font-normal font-Inter mb-[18px] ">
                Features
              </p>
              <p className="text-[#666666] text-lg font-normal font-Inter mb-[18px] ">
                Blogs
              </p>
              <button className="flex gap-2 ">
                <div>
                  <p className="text-[#666666] text-lg font-normal font-Inter mb-[18px]  ">
                    Resources
                  </p>
                </div>
                <span className="border-[1px] py-1 px-3 rounded-md h-8 w-[58px] text-base font-normal font-Inter  border-Black_15  hover:border-Black_15 hover:bg-myYellow hover:text-Black_15 bg-[#1A1A1A] ">
                  New
                </span>
              </button>
              <p className="text-[#666666] text-lg font-normal font-Inter mb-[18px] ">
                Testimonials
              </p>
              <p className="text-[#666666] text-lg font-normal font-Inter mb-[18px] ">
                Contact Us
              </p>
              <p className="text-[#666666] text-lg font-normal font-Inter mb-[18px] ">
                Newsletter
              </p>
            </div>
            <div>
              <h4 className="text-xl text-white font-medium font-Inter mb-[36px]  hover:text-myYellow">
                News
              </h4>
              <p className="text-[#666666] text-lg font-normal font-Inter mb-[18px] ">
                Trending Stories
              </p>
              <p className="text-[#666666] text-lg font-normal font-Inter mb-[18px] ">
                Featured Videos
              </p>
              <p className="text-[#666666] text-lg font-normal font-Inter  mb-[18px] ">
                Technology
              </p>
              <p className="text-[#666666] text-lg font-normal font-Inter mb-[18px] ">
                Health
              </p>
              <p className="text-[#666666] text-lg font-normal font-Inter mb-[18px]  ">
                Politics
              </p>
              <p className="text-[#666666] text-lg font-normal font-Inter mb-[18px]  ">
                Environment
              </p>
            </div>
            <div>
              <h4 className="text-xl text-white font-medium font-Inter mb-[36px]  hover:text-myYellow">
                Blogs
              </h4>
              <p className="text-[#666666] text-lg font-normal font-Inter mb-[18px] ">
                Quantum Computing
              </p>
              <p className="text-[#666666] text-lg font-normal font-Inter mb-[18px] ">
                AI Ethics
              </p>
              <p className="text-[#666666] text-lg font-normal font-Inter mb-[18px]  ">
                Space Exploration
              </p>
              <button className="flex gap-2 ">
                <div>
                  <p className="text-[#666666] text-lg font-normal font-Inter mb-[18px]  ">
                    Biotechnology
                  </p>
                </div>
                <span className="border-[1px] py-1 px-3 rounded-md h-8 w-[58px] text-base font-normal font-Inter  border-Black_15  hover:border-Black_15 hover:bg-myYellow hover:text-Black_15 bg-[#1A1A1A]">
                  New
                </span>
              </button>
              <p className="text-[#666666] text-lg font-normal font-Inter mb-[18px] ">
                Renewable Energy
              </p>
              <p className="text-[#666666] text-lg font-normal font-Inter mb-[18px]  ">
                Biohacking
              </p>
            </div>
            <div>
              <h4 className="text-xl text-white font-medium font-Inter mb-[36px]  hover:text-myYellow">
                Podcasts
              </h4>
              <p className="text-[#666666] text-lg font-normal font-Inter mb-[18px] ">
                AI Revolution
              </p>
              <button className="flex gap-2 ">
                <div>
                  <p className="text-[#666666] text-lg font-normal font-Inter mb-[18px]  ">
                    AI Revolution
                  </p>
                </div>
                <span className="border-[1px] py-1 px-3 rounded-md h-8 w-[58px] text-base font-normal font-Inter  border-Black_15  hover:border-Black_15 hover:bg-myYellow hover:text-Black_15 bg-[#1A1A1A] ">
                  New
                </span>
              </button>
              <p className="text-[#666666] text-lg font-normal font-Inter mb-[18px]  ">
                TechTalk AI
              </p>
              <p className="text-[#666666] text-lg font-normal font-Inter mb-[18px] ">
                AI Conversations
              </p>
            </div>
            <div className="  flex-col  col-span-2 lg:col-span-1">
              <h4 className="text-xl text-white font-medium font-Inter mb-[36px]  hover:text-myYellow ">
                Resources
              </h4>
              <div className="lg:flex-col  flex-wrap  flex gap-[18px] items-start">
                <button className="lg:min-w-[170px] flex gap-2.5 rounded-lg border-[1px]  py-2 px-4  lg:max-h-[47px] border-Black_15 items-center">
                  <p className="text-[#666666] text-lg font-normal font-Inter w-fit ">
                    Whitepapers
                  </p>

                  <img src={icon4} alt="icon4" width={20} height={20} />
                </button>
                <button className="flex gap-2.5 rounded-lg border-[1px]  py-2 px-4  max-h-[47px] border-Black_15 items-center">
                  <p className="text-[#666666] text-lg font-normal font-Inter w-fit  ">
                    Ebooks
                  </p>

                  <img src={icon4} alt="icon4" width={20} height={20} />
                </button>
                <button className="flex gap-2.5 rounded-lg border-[1px]  py-2 px-4  max-h-[47px] border-Black_15 items-center">
                  <p className="text-[#666666] text-lg font-normal font-Inter w-fit  ">
                    Reports
                  </p>

                  <img src={icon4} alt="icon4" width={20} height={20} />
                </button>
                <button className="lg:min-w-[205px] flex gap-1.5 rounded-lg border-[1px]  py-2 px-4   max-h-[47px] border-Black_15 items-center">
                  <p className="text-[#666666] text-lg font-normal font-Inter w-fit text-nowrap ">
                    Research Papers
                  </p>
                  <img
                    src={icon4}
                    alt="icon4"
                    width={20}
                    height={20}
                    style={{
                      marginLeft: "4px",
                    }}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="border-transparent border-b border-b-white opacity-10  max-w-[1,596px] mt-9"></div>
        </div>
      </div>
      <div className="lg:flex lg:justify-between items-center mt-10 mb-10 px-9 ">
        <div className="  gap-5 lg:hidden flex   justify-center    ">
          <img src={icon1} alt="icon1" width={24} height={24} />
          <img src={icon2} alt="icon2" width={24} height={24} />
          <img src={icon3} alt="icon3" width={24} height={24} />
        </div>
        <p className="text-[#666666] font-normal font-Inter text-lg mt-4  flex justify-center  ">
          Terms & Conditions | Privacy Policy
        </p>
        <div className="  gap-5  lg:flex hidden   ">
          <img src={icon1} alt="icon1" width={24} height={24} />
          <img src={icon2} alt="icon2" width={24} height={24} />
          <img src={icon3} alt="icon3" width={24} height={24} />
        </div>
        <p className="text-[#666666] font-normal font-Inter text-lg flex justify-center mt-2  ">
          © 2024 FutureTech. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
