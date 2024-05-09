import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import importedImg from "../../assets/foodPng.jpg";
const SuplyCard = ({ supply }) => {
  console.log(supply);
  const { title, image, _id, category, quantity } = supply;

  return (
    <Card
      className="w-full"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={importedImg}
    >
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>

      <h4 className="text-lg font-semibold tracking-tight text-gray-900">
        {category}
      </h4>

      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {quantity}
        </span>
        <Link
          to={`/supplies/${_id}`}
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Details
        </Link>
      </div>
    </Card>
  );
};

export default SuplyCard;
