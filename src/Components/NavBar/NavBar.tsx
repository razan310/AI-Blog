import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "./../../assets/icon/Group.svg";
import img2 from "./../../assets/icon//Icon.svg";
import img3 from "./../../assets/icon/Icon(20).svg";

interface LinkItem {
  text: string;
  href: string;
}

const links: LinkItem[] = [
  { text: "Home", href: "/AI-Blog" },
  { text: "News", href: "/AI-Blog/News" },
  { text: "Podcasts", href: "/AI-Blog/Podcasts" },
  { text: "Resources", href: "/AI-Blog/Resources" },
];

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [Top, setTop] = useState(false)

  const handleLinkClick = (href: string) => {
    const navigate = useNavigate();
    return () => {
      navigate(href);
    };
  };
  const changeTop = () => {
    if (window.scrollY >= 5) {
        setTop(true)
    } else {
        setTop(false)
    }
}
window.addEventListener('scroll', changeTop)

  return (
    <nav>
      <div className="bg-[#1A1A1A] flex text-[#98989A] text-lg justify-center font-normal gap-2.5 container-padding py-3  ">
        <span>
          Subscribe to our Newsletter For New & latest Blogs and Resources{" "}
        </span>
        <img src={img2} alt="ArrowUpRight" width={20} height={20} />
      </div>

      <div className={Top ? " bg-[#141414]  h-[103px] fixed z-50 w-full  container-padding flex items-center justify-between top-0 " : 'bg-[#141414]  h-[103px] fixed z-10 w-full  container-padding flex items-center justify-between '}>
        <Link to="/AI-Blog" className="shrink-0 flex  ">
          <img src={img1} alt="website logo" width={50} height={50} />
          <h3 className="ml-2 mt-3 text-white text-lg">FutureTech</h3>
        </Link>

        <div className="hidden xl:flex items-center   ">
          {links.map(({ text, href }, i) => (
            <button
              key={i}
              onClick={handleLinkClick(`${href}`)}
              className=" text-[#7E7E81] text-lg font-normal hover:bg-[#141414] hover:border-[#333333] hover:border-[1px] rounded-[10px] max-h-[55px] py-3.5 px-6  gap-10 "
            >
              {text}
            </button>
          ))}
        </div>
        <div className="hidden xl:flex items-center ">
          <button className=" text-[#141414] text-sm bg-myYellow flex justify-center font-medium rounded-[10px] gap-2.5 w-[137px] h-{55px} px-5 py-3.5 ">
            Contact Us
          </button>
        </div>
        <div className="flex xl:hidden relative">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-3xl text-white"
          >
            <img src={img3} alt="menu" />
          </button>
          <div
            style={{
              opacity: menuOpen ? 1 : 0,
              pointerEvents: menuOpen ? "all" : "none",
            }}
            className="absolute flex flex-col z-10 text-myYellow bg-Black_15 w-[200px] p-[30px] rounded-[10px] top-[120%] right-0"
          >
            {links.map(({ href, text }, i) => (
              <button
                key={i}
                onClick={() => handleLinkClick(href)}
                className="text-lg "
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
