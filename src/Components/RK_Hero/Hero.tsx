import CounterSection from "../RK_Counter/CounterSection";
import img from "./../../assets/images/HomePage/heroLayer.png";
import icon from "./../../assets/icon/Icon.svg";
import Button from "../RK_Button/Button";
import UserList from "../RK_UserList/UserList";
import profile1 from "./../../assets/images/HomePage/Profile10.png";
import profile2 from "./../../assets/images/HomePage/Profile11.png";
import profile3 from "./../../assets/images/HomePage/Profile9.png";
import profile4 from "./../../assets/images/HomePage/Profile7.png";

// Define props interface
interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  resourceText: string;
  resourceDescription: string;
}

const counterData = [
  {
    endNumber: 300,
    suffix: "",
    label: "Resources available",
    className: "px-[20px] xl:pl-[80px] 2xl:pl-[162px]",
  },
  {
    endNumber: 12,
    suffix: "K",
    label: "Total Downloads",
    className: "px-[20px] xl:pl-[80px]",
  },
  {
    endNumber: 10,
    suffix: "K",
    label: "Active Users",
    className: "px-[20px] xl:pl-[80px]",
  },
];

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  resourceText,
  resourceDescription,
}) => {
  return (
    <div className="h-auto flex flex-col lg:flex-row md:p12 text-white">
      {/* النصوص والعدادات */}
      <div className="flex flex-col lg:w-7/12 lg:h-[755px]">
        {/* النصوص */}
        <div className="container-padding flex-grow flex flex-col justify-center my-4 md:my-8 2xl:pr-12 2xl:pl-40">
          <p className="font-Kumbh font-medium text-xl lg:text-3xl text-myGray">
            {subtitle}
          </p>
          <h1 className="font-Kumbh font-medium text-3xl md:text-5xl lg:text-7xl text-white leading-tight md:my-4">
            {title}
          </h1>
          <p className="font-Inter font-normal text-sm md:text-base lg:text-lg text-myGray ">
            {description}
          </p>
        </div>
        {/* العدادات */}
        <div className="flex h-1/4 items-center justify-between">
          {counterData.map(({ endNumber, suffix, label, className }, index) => (
            <CounterSection
              key={index}
              index={index}
              suffix={suffix}
              label={label}
              endNumber={endNumber}
              className={className}
            />
          ))}
        </div>
      </div>

      {/* الصورة والمحتوى الإضافي */}
      <div className="h-[755px] flex-1 flex flex-col border border-neutral-800 relative">
        <img src={img} alt="AI illustration" className="w-full max-w-md" />
        <div className="pl-12 pb-9 absolute bottom-1 md:bottom-3 lg:bottom-15 left-10 p-6 rounded-lg">
          <UserList
            profile1={profile1}
            profile2={profile2}
            profile3={profile3}
            profile4={profile4}
          />
          <p className="text-lg font-semibold my-2 text-white">
            {resourceText}
          </p>
          <p className="text-myGray mt-3">{resourceDescription}</p>
          <Button
            text="Explore Resources"
            icon={icon}
            href="/AI-Blog/resources"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
