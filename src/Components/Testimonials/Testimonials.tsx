
import StarRating from './StarRating'

const cardData = [
  {
    id: "1",
    profileImage: "/AI-Blog/src/assets/images/HomePage/Profile1.png",
    ReaderName: "Sarah Thompson",
    ReaderResidence: "San Francisco, USA",
    ReaderOpinion: "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
  },
  {
    id: "2",
    profileImage: "/AI-Blog/src/assets/images/HomePage/Profile2.png",
    ReaderName: "Raj Patel",
    ReaderResidence: "Mumbai, India",
    ReaderOpinion: "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.",
  },
  {
    id: "3",
    profileImage: "/AI-Blog/src/assets/images/HomePage/Profile3.png",
    ReaderName: "Emily Adams",
    ReaderResidence: "London, UK",
    ReaderOpinion: "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
  },
  {
    id: "4",
    profileImage: "/AI-Blog/src/assets/images/HomePage/Profile4.png",
    ReaderName: "Alan Jackson",
    ReaderResidence: "Houston, USA",
    ReaderOpinion: "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.",
  },
  {
    id: "5",
    profileImage: "/AI-Blog/src/assets/images/HomePage/Profile5.png",
    ReaderName: "Jessica Miller",
    ReaderResidence: "Boston, USA",
    ReaderOpinion: "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research.",
  },
  {
    id: "6",
    profileImage: "/AI-Blog/src/assets/images/HomePage/Profile6.png",
    ReaderName: "Diego Lopez",
    ReaderResidence: "Barcelona, Spain",
    ReaderOpinion: "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.",
  },
]

const Testimonials = () => {
  return (
    <section>
      <div className="flex justify-around items-center w-full bg-[#1A1A1A] p-[120px] border border-b-0 border-Black_15
             max-[1440px]:p-[80px] max-[390px]:flex-col max-[390px]:px-[16px] max-[390px]:py-[40px]">
        <div>
          <p className="bg-[#333333] font-Inter font-medium text-xl text-white py-[6px] px-[10px] w-max my-4 rounded
                    max-[1440px]:text-[16px] max-[1440px]:py-[4px] max-[1440px]:px-[8px] max-[390px]:text-[14px]">What Our Readers Say</p>
          <h1 className="font-Kumbh font-medium text-white text-[58px]
                    max-[1440px]:text-[44px] max-[390px]:text-[28px]">Real Words from Real Readers</h1>
        </div>
        <div>
          <button className="flex items-center py-4 px-[18px] rounded-xl bg-[#141414]
                    max-[1440px]:py-[14px] max-[1440px]:px-[16px] max-[390px]:mt-[30px] max-[390px]:w-[358px] max-[390px]:justify-center">View All Testimonials<img className=" ml-[10px]" src="/AI-Blog/src/assets/icon/Icon.svg" alt="ArrowUpRight" width="20" height="20" /></button>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap justify-center items-center w-full">
          {cardData.map((cardData, index) => (
            <div className='w-[465.33px] text-center flex justify-center items-center flex-col mt-20 ml-[120px] mr-[50px]
             max-[1440px]:w-[373.33px] max-[1440px]:mx-10 max-[1440px]:mt-[50px] max-[390px]:w-[358px] max-[390px]:mt-0 max-[390px]:ml-0 max-[390px]:mr-0' key={index}>
              <div className="flex justify-center items-center w-full 
                    max-[390px]:mt-[40px]">
                <div>
                  <img className="w-[60px] max-[1440px]:w-[50px] max-[390px]:w-[50px] max-w-none" src={cardData.profileImage} />
                </div>
                <div className="ml-4 max-[1440px]:ml-[10px] max-[390px]:ml-[10px] 
                    max-[390px]:w-auto">
                  <p className="font-Inter font-medium text-xl text-white 
                     max-[1440px]:text-lg max-[390px]:text-lg">{cardData.ReaderName}</p>
                  <p className="font-Inter font-normal text-lg
                     max-[1440px]:text-base max-[390px]:text-base">{cardData.ReaderResidence}</p>
                </div>
              </div>
              <div className='bg-[#1A1A1A] border border-Black_15 mt-[61px] rounded-xl
               max-[1440px]:mt-[49px] max-[390px]:mt-[49px]'>
              <StarRating />
                <p className='font-Inter font-normal text-lg px-[30px] pt-[50px] pb-[30px]
                max-[1440px]:text-base max-[1440px]:px-6 max-[1440px]:pt-10 max-[1440px]:pb-6 max-[390px]:px-0 max-[390px]:text-sm'>{cardData.ReaderOpinion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default Testimonials