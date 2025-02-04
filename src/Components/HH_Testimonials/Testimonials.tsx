import useStore from '../../Zustand/TestimonialsStore/useTestimonialsStore';
import StarRating from './StarRating'
import arrowicon from "../../assets/icon/Icon.svg";
const Testimonials = () => {
  const {cardData} = useStore();
  return (
    <section>
      <div className="flex justify-around items-center w-full bg-[#262626] p-[120px] border border-b-0 border-Black_15 container-padding
             max-[1440px]:p-[80px] max-[500px]:flex-col max-[500px]:px-[16px] max-[500px]:py-[40px]">
        <div>
          <p className="bg-[#333333] font-Inter font-medium text-xl text-white py-[6px] px-[10px] w-max my-4 rounded
                    max-[1440px]:text-[16px] max-[1440px]:py-[4px] max-[1440px]:px-[8px] max-[500px]:text-[14px]">What Our Readers Say</p>
          <h1 className="font-Kumbh font-medium text-white text-[58px]
                    max-[1440px]:text-[44px] max-[500px]:text-[28px]">Real Words from Real Readers</h1>
        </div>
        <div>
          <button className="flex items-center py-4 px-[18px] rounded-xl bg-[#141414]
                    max-[1440px]:py-[14px] max-[1440px]:px-[16px] max-[500px]:mt-[30px] max-[500px]:w-[358px] max-[500px]:justify-center max-[390px]:w-[262px]">View All Testimonials<img className=" ml-[10px]" src={arrowicon} alt="ArrowUpRight" width="20" height="20" /></button>
        </div>
      </div>
      <div className='py-10'>
        <div className="flex flex-wrap justify-center items-center w-full ">
          {cardData.map((cardData) => (
            <div className='w-[465.33px] text-center flex justify-center items-center flex-col mt-20 ml-[120px] mr-[50px]
             max-[1440px]:w-[373.33px] max-[1440px]:mx-10 max-[1440px]:mt-[50px] max-[500px]:w-[358px] max-[500px]:mt-0 max-[500px]:ml-0 max-[500px]:mr-0'>
              <div className="flex justify-center items-center w-full 
                    max-[500px]:mt-[40px]">
                <div>
                  <img className="w-[60px] max-[1440px]:w-[50px] max-[500px]:w-[50px] max-w-none" src={cardData.profileImage} />
                </div>
                <div className="ml-4 max-[1440px]:ml-[10px] max-[500px]:ml-[10px] 
                    max-[500px]:w-auto">
                  <p className="font-Inter font-medium text-xl text-white 
                     max-[1440px]:text-lg max-[500px]:text-lg">{cardData.ReaderName}</p>
                  <p className="font-Inter font-normal text-lg
                     max-[1440px]:text-base max-[500px]:text-base">{cardData.ReaderResidence}</p>
                </div>
              </div>
              <div className='bg-[#262626] border border-Black_15 mt-[61px] rounded-xl
               max-[1440px]:mt-[49px] max-[500px]:mt-[49px]'>
              <StarRating rating={cardData.rating} />
                <p className='font-Inter font-normal text-lg px-[30px] pt-[50px] pb-[30px]
                max-[1440px]:text-base max-[1440px]:px-6 max-[1440px]:pt-10 max-[1440px]:pb-6 max-[500px]:px-0 max-[500px]:text-sm'>{cardData.ReaderOpinion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default Testimonials