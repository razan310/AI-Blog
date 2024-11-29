import img1 from "./../../assets/icon/Group.svg";
import icon from "./../../assets/icon/Icon(21).svg";
const TechRevolution = () => {
  return (
    <div className=" bg-[#1A1A1A] lg:py-[120px] lg:px-[162px] py-[30px] px-[30px]     ">
      <div className="  md:flex-row  lg:flex lg:items-center lg:justify-start gap-20   ">
        <div className="flex items-center  gap-11  ">
          <img
            src={img1}
            alt="img1"
            className=" lg:w-[150px] lg:h-[150px]  md:w-[120px] md:h-[120px]  "
          />
          <span className="font-Inter font-medium lg:text-xl  text-sm text-white rounded py-1.5 px-2.5  bg-[#333333] lg:hidden block  ">
            Learn, Connect, and Innovate
          </span>
        </div>

        <div>
          <span className="font-Inter font-medium text-xl text-white rounded py-1.5 px-2.5  bg-[#333333]  lg:block hidden  w-fit   ">
            Learn, Connect, and Innovate
          </span>
          <h1 className="font-Kumbh font-medium  text-white lg:text-[58px] text-[30px] mb-4 mt-4 ">
            Be Part of the Future Tech Revolution
          </h1>

          <p className="lg:text-lg text-md  text-[#7E7E81] font-normal font-Inter">
            Immerse yourself in the world of future technology. Explore our
            comprehensive resources, connect with fellow tech enthusiasts, and
            drive innovation in the industry. Join a dynamic community of
            forward-thinkers.
          </p>
        </div>
      </div>
      <div className="grid   lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-2  mt-[100px] bg-[#141414]  border-Black_15 border-[1px] rounded-xl px-4 py-4  ">
        <div className=" border-[1px] rounded-xl  max-h-[206px]  p-4 py-8  bg-[#1A1A1A] border-Black_15 ">
          <div className="flex  gap-14 ">
            <div>
              <h3 className="font-Inter text-[22px] font-semibold text-white">
                Resource Access
              </h3>
            </div>
            <div>
              <div className="rounded-[100px] p-2   lg:max-h[52px] bg-myYellow max-w-[52px]  ">
                <img src={icon} alt="icon" width={24} height={24} style={{}} />
              </div>
            </div>
          </div>
          <p className="font-Inter font-normal text-sm  mt-6">
            Visitors can access a wide range of resources, including ebooks,
            whitepapers, reports.
          </p>
        </div>
        <div className=" border-[1px] rounded-xl p-4 py-8 max-h-[206px] bg-[#1A1A1A] border-Black_15">
          <div className="flex  gap-14  ">
            <div>
              <h3 className="font-Inter text-[22px] font-semibold text-white">
                Community Forum
              </h3>
            </div>
            <div>
              <div className="rounded-[100px] p-2   lg:max-h[52px] bg-myYellow max-w-[52px] ">
                <img src={icon} alt="icon" width={24} height={24} />
              </div>
            </div>
          </div>
          <p className="font-Inter font-normal text-sm  mt-6">
            Join our active community forum to discuss industry trends, share
            insights, and collaborate with peers.
          </p>
        </div>
        <div className=" border-[1px] rounded-xl p-4 py-8 max-h-[206px] bg-[#1A1A1A] border-Black_15">
          <div className="flex   gap-14 ">
            <div>
              <h3 className="font-Inter text-[22px] font-semibold text-white">
                Tech Events
              </h3>
            </div>
            <div>
              <div className="rounded-[100px] p-2 lg:max-h[52px] bg-myYellow max-w-[52px] ">
                <img src={icon} alt="icon" width={24} height={24} />
              </div>
            </div>
          </div>
          <p className="ont-Inter font-normal text-sm  mt-6">
            Stay updated on upcoming tech events, webinars, and conferences to
            enhance your knowledge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechRevolution;
