interface ButtonProps {
    icon: string; // رابط الأيقونة
    text: string; // النص المعروض داخل الزر
    href: string; // الرابط الذي سيتم التوجه إليه عند الضغط على الزر
  }
  
  const Button: React.FC<ButtonProps> = ({ icon, text, href }) => {
    return (
      <div>
        <button
          onClick={() => (window.location.href = href)}
          className="mt-3 flex items-center text-white px-6 py-4 rounded-lg font-semibold shadow-md border border-neutral-800 transition"
        >
          {text}
          <img src={icon} alt="Icon" className="ml-2" />
        </button>
      </div>
      
    );
  };
  
  export default Button;
  