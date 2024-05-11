import DashboardTable from "../../components/DashboardCompo/DashboardTable";
import { useGetSuplliesQuery } from "../../redux/api/api";

const Dashboard = () => {
  const { data, isLoading } = useGetSuplliesQuery(undefined);
console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        {data?.map((item, idx) => (
          <DashboardTable item={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
