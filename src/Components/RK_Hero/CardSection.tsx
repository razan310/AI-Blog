
import HeroCards from "./HeroCards";
import icon from "./../../assets/icon/Button.svg"; // استيراد الأيقونة
import icon1 from "./../../assets/icon/Icon(1).svg"; // استيراد الصور من المصفوفة
import icon2 from "./../../assets/icon/Icon(2).svg"; 
import icon3 from "./../../assets/icon/Icon(3).svg"; 


// بيانات البطاقة
const heroCardsData = [
  {
    icon1: icon1,
    icon2: icon,
    title: "Latest News Updates",
    type: "Stay Current",
    info: "Over 1,000 articles published monthly",
    classname:'px-[20px] xl:pl-[80px] 2xl:pl-[162px]'
  },
  {
    icon1: icon2,
    icon2: icon,
    title: "Card 2 Title",
    type: "Card Type 2",
    info: "Information for card 2",
    classname:'px-[20px]'
  },
  {
    icon1: icon3,
    icon2: icon,
    title: "Expert Contributors",
    type: "Trusted Insights",
    info: "50+ renowned AI experts on our team",
    classname:'px-[20px] xl:pr-[80px] 2xl:pr-[162px]'
  },
];

const CardSection = () => {
  return (
    <div className="flex flex-col md:flex-row md:flex-nowrap">
      {heroCardsData.map((cardData, index) => (
        <HeroCards
          key={index}
          icon1={cardData.icon1}   
          icon2={cardData.icon2} 
          title={cardData.title}
          type={cardData.type}
          info={cardData.info}
          className={cardData.classname}
        />
      ))}
    </div>
  );
};

export default CardSection;
