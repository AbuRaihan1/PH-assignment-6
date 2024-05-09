import SuplyCard from "../components/supplies/SuplyCard";
import { useGetSuplliesQuery } from "../redux/api/api";

const Supplies = () => {
  const { data: suupplyItem, isLoading } = useGetSuplliesQuery(undefined);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6">
      {suupplyItem?.map((supply, idx) => ( 
        <div className="flex justify-center items-center" key={idx}>
          <SuplyCard supply={supply} />
        </div>
      ))}
    </div>
  );
};

export default Supplies;
