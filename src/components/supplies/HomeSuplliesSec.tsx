import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import SuplyCard from "./SuplyCard";
const HomeSuplliesSec = ({ data }) => {
  return (
    <div>
      <div className="bg-gray-50 pt-6 pb-1 border px-3 rounded-lg">
        <div className="text-center text-2xl md:text-3xl font-bold mb-6">
          <h2>Essential Supplies</h2>
        </div>
        {data?.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
              {data?.slice(0, 6).map((supply) => (
                <SuplyCard supply={supply} />
              ))}
            </div>

            {data?.length > 6 && (
              <div className="flex justify-center items-center my-10">
                <Link to="/supplies">
                  <Button className="w-60">View All</Button>
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col gap-4 text-center">
            <p className="md:text-2xl text-xl text-gray-600 font-bold">
              No data available
            </p>
            <Link to="/dashboard/create-post">
              <Button className="mb-2">Create Post</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeSuplliesSec;
