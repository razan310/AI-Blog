

const NoData = ({ message = "No Data Available" }) => {
  return (
    <div className="flex flex-col items-center justify-center h-64 bg-myRed text-white shadow-lg p-6">
      <div className="bg-[#1a1a1a] p-4 rounded-full mb-4">
        <svg
          className="w-12 h-12 text-myRed"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h1m0-4h-1m-1 12h2a9 9 0 100-18h-2a9 9 0 000 18z"></path>
        </svg>
      </div>
      <h2 className="text-xl font-semibold">{message}</h2>
    </div>
  );
};

export default NoData;
