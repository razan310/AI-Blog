
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-Black_15 text-myYellow">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl mt-4">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-myRed text-white font-medium rounded hover:bg-myYellow hover:text-Black_15 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
