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
  const { title, category, quantity, image, description } = singleItem;
  console.log(singleItem);
  return (
    <>
      <div className="flex justify-center items-center my-10">
        <div className=" md:max-w-lg md:min-w-lg w-full border p-3 rounded-lg">
          <img
            src={image || importedImg}
            alt=""
            className="w-full rounded-lg h-[230px]"
          />
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white my-2">
            {title}
          </h5>

          <div className="flex items-center justify-between mb-4">
            <h4 className="text-md font-semibold ">{category}</h4>
            <span className="text-sm font-semibold bg-orange-500 text-white px-2 rounded-xl">
              {quantity}
            </span>
          </div>

          <p className="text-justify text-md text-gray-600 font-semibold">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default SupplyDetails;
