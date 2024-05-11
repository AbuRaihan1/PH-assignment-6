import { Rating, RatingStar } from "flowbite-react";

const TestimonialCard = ({ item }) => {
  return (
    <div>
      <div
        style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
        className=" p-3 rounded-md bg-white border"
      >
        <div className="flex justify-center items-center my-2">
          <img className="rounded-full h-20 w-20" src={item.image} alt="" />
        </div>
        <Rating
          size="md"
          className="text-center flex justify-center items-center mb-3"
        >
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
          <RatingStar />
        </Rating>
        <p className="font-semibold text-justify text-gray-500">
          {item.description}
        </p>
        <div className="flex items-center divide-x-2 divide-gray-300 mt-3">
          <cite className="pr-3  font-medium text-gray-900 dark:text-white">
            {item.name}
          </cite>
          <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
            {item.designation}
          </cite>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
