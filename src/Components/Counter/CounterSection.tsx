import Counter from "./Counter";

interface CounterSectionProps {
    index: number; // رقم العنصر
    suffix: string; // النص الإضافي بعد الرقم (مثل K)
    label: string; // وصف العداد
    endNumber: number; // الرقم النهائي الذي سيصل إليه العداد
    className?: string; // كلاس إضافي يتم تمريره
  }
  
  const CounterSection: React.FC<CounterSectionProps> = ({ index, suffix, label, endNumber, className }) => {
    return (
      <div
        className={`w-full flex flex-col justify-center flex-1 h-[128px] lg:h-full border border-neutral-800 ${className}`}
        key={index}
      >
        <p className="flex items-baseline text-xl lg:text-4xl font-bold text-white">
          <Counter endNumber={endNumber} duration={1000} />
          <span className="ml-1">{suffix}</span>
          <span className="text-myYellow">+</span>
        </p>
        <p className="text-sm font-normal lg:text-base lg:font-medium text-myGray mt-2">{label}</p>
      </div>
    );
  };
  
  export default CounterSection;
  