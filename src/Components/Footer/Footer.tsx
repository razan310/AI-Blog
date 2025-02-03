import icon1 from "./../../assets/icon/Icon(12).svg";
import icon2 from "./../../assets/icon/Icon(13).svg";
import icon3 from "./../../assets/icon/Icon(14).svg";
import icon4 from "./../../assets/icon/Icon.svg";
const Footer = () => {
  return (
      <footer className=" py-8 md:py-12 container-padding">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
          <div>
            <h3 className="text-white font-semibold mb-4">Home</h3>
            <ul className="space-y-2">
              <li>Features</li>
              <li>Blogs</li>
              <li className="flex items-center gap-2">Resources <button className="bg-Black_15 text-xs px-2 py-1 rounded">New</button></li>
              <li>Testimonials</li>
              <li>Contact Us</li>
              <li>Newsletter</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">News</h3>
            <ul className="space-y-2">
              <li>Trending Stories</li>
              <li>Featured Videos</li>
              <li>Technology</li>
              <li>Health</li>
              <li>Politics</li>
              <li>Environment</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Blogs</h3>
            <ul className="space-y-2">
              <li>Quantum Computing</li>
              <li>AI Ethics</li>
              <li>Space Exploration</li>
              <li className="flex items-center gap-2">Biotechnology <button className="bg-Black_15 text-xs px-2 py-1 rounded">New</button></li>
              <li>Renewable Energy</li>
              <li>Biohacking</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Podcasts</h3>
            <ul className="space-y-2">
              <li>AI Revolution</li>
              <li className="flex items-center gap-2">AI Revolution <button className="bg-Black_15 text-xs px-2 py-1 rounded">New</button></li>
              <li>TechTalk AI</li>
              <li>AI Conversations</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">Whitepapers<img src={icon4} alt="icon1" width={24} height={24} /></li>
              <li className="flex items-center gap-2">Ebooks<img src={icon4} alt="icon2" width={24} height={24} /></li>
              <li className="flex items-center gap-2">Reports<img src={icon4} alt="icon3" width={24} height={24} /></li>
              <li className="flex items-center gap-2">Research Papers<img src={icon4} alt="icon3" width={24} height={24} /></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-[#666666] font-normal font-Inter text-lg  flex justify-center  ">
            Terms & Conditions | Privacy Policy
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <img src={icon1} alt="icon1" width={24} height={24} />
            <img src={icon2} alt="icon2" width={24} height={24} />
            <img src={icon3} alt="icon3" width={24} height={24} />
          </div>
          <p className="text-sm text-[#666666]">© 2024 FutureTech. All rights reserved.</p>
        </div>
      </footer>
  );
};

export default Footer;
