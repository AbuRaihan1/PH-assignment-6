import { Card } from "flowbite-react";
import { useParams } from "react-router-dom";
import importedImg from "../../assets/foodPng.jpg";
import { useGetSuplliesQuery } from "../../redux/api/api";

const SupplyDetails = () => {
  const { data: supplyDetailsData, isLoading } = useGetSuplliesQuery(undefined);
  const { _id } = useParams();
  console.log(_id);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(supplyDetailsData);
  const singleItem = supplyDetailsData.find((item) => item._id === _id);
  console.log(singleItem);
  const { title, category, quantity } = singleItem;
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
      </div>
    </Card>
  );
};

export default SupplyDetails;
