import { Link } from "react-router-dom";
import SuplyCard from "./SuplyCard";
import { Button } from "flowbite-react";
const HomeSuplliesSec = ({data}) => {

  return (
    <div>
      <div className="bg-gray-50 pt-6 pb-1 border px-3 rounded-lg">
        <div className="text-center text-2xl md:text-3xl font-bold mb-6">
          <h2>Essential Supplies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.slice(0, 6).map((supply) => (
            <SuplyCard supply={supply} />
          ))}
        </div>

        <div className="flex justify-center items-center my-10">
          <Link to="/supplies">
            <Button className="w-60">View All</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSuplliesSec;
