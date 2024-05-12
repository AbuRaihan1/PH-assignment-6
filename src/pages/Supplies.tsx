import { Link } from "react-router-dom";
import SuplyCard from "../components/supplies/SuplyCard";
import { useGetSuplliesQuery } from "../redux/api/api";
import { Button } from "flowbite-react";

const Supplies = () => {
  const { data: supplyItem, isLoading } = useGetSuplliesQuery(undefined);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="mt-5">
        <div className="text-center text-2xl md:text-3xl font-bold">
          <h2>Essential Suplies</h2>
        </div>

        {supplyItem?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
            {supplyItem?.map((supply, idx) => (
              <div className="flex justify-center items-center" key={idx}>
                <SuplyCard supply={supply} />
              </div>
            ))}
          </div>
        ) : (
          <div className=" h-[400px]  flex justify-center items-center flex-col gap-4 text-center">
            <p className="md:text-2xl text-xl text-gray-600 font-bold">
              No data available
            </p>
            <Link to="/dashboard/create-post">
              <Button className="mb-2">Create Post</Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Supplies;
