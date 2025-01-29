
const StarRating: React.FC = () => {

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i}>
          <img className="w-6 max-[1440px]:w-5 max-[390px]:w-5 " src="./AI-Blog/src/assets/icon/Shape.svg" />
        </span>
      );
    }
    return stars;
  };

  return (
    <div className='flex items-center justify-center relative'>
      <div className='px-4 py-[10px] border rounded-full w-[180px] flex items-center justify-between bg-[#141414] absolute
      max-[1440px]:px-3 max-[1440px]:py-2 max-[390px]:px-3 max-[390px]:py-2'>{renderStars()}</div>
    </div>
  );
};

export default StarRating;
