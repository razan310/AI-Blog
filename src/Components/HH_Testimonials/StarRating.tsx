import staricon from "../../assets/icon/Shape.svg";

const StarRating = ({ rating }: { rating: number }) => {

  const RatingStars = () => {
    return (
      <div className="flex gap-2">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            className={`w-6 max-[1440px]:w-5 max-[390px]:w-5 ${i < rating ? "opacity-100" : "opacity-30"}`}
            src={staricon}
            alt="star"
          />
        ))}
      </div>
    );
  };

  return (
    <div className='flex items-center justify-center relative'>
      <div className='px-4 py-[10px] border rounded-full w-[180px] flex items-center justify-center bg-[#141414] absolute
      max-[1440px]:px-3 max-[1440px]:py-2 max-[390px]:px-3 max-[390px]:py-2'>{RatingStars()}</div>
    </div>

  )
};

export default StarRating;
