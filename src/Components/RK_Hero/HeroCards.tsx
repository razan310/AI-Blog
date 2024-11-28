interface HeroCardsProps {
    icon1: string;  // URL للصورة الأولى
    icon2: string;  // URL للصورة الثانية
    title: string;   // العنوان
    type: string;    // نوع العنصر
    info: string;    // معلومات إضافية
    className?: string;  // خاصية لتخصيص التنسيق
  }
  
  const HeroCards: React.FC<HeroCardsProps> = ({ icon1, icon2, title, type, info, className }) => {
    return (
      <div className={`w-full flex flex-col p-4 border border-neutral-800 ${className}`}>
        <img src={icon1} alt="icon1" className="mb-4 w-[50px] h-[50px]" />
        <div className="flex justify-between gap-3 items-start mb-4">
          <div>
            <h1 className="font-Inter text-xl font-medium text-white">{title}</h1>
            <p className="text-sm text-myGray">{type}</p>
          </div>
          <div>
            <img src={icon2} alt="icon2" className="w-8 h-8" />
          </div>
        </div>
        {/* معلومات إضافية */}
        <p className="text-sm text-myGray">{info}</p>
      </div>
    );
  };
  
  export default HeroCards;
  