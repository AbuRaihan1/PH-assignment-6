import { Link } from "react-router-dom";
import importedImg from "../../assets/foodPng.jpg";
const SuplyCard = ({ supply }) => {
  const { title, image, _id, category, quantity } = supply;
  return (
    <div className="w-full shadow-lg p-3 rounded-lg bg-white">
      <img
        className="rounded-lg h-[200px] w-full"
        src={image || importedImg}
        alt="Supply Image"
      />
      <h5 className="text-xl font-semibold my-1">{title}</h5>

      <div className="flex items-center justify-between mb-4">
        <h4 className="text-md font-semibold ">{category}</h4>
        <span className="text-sm font-semibold bg-orange-500 text-white px-2 rounded-xl">
          {quantity}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <Link
          to={`/supplies/${_id}`}
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default SuplyCard;
