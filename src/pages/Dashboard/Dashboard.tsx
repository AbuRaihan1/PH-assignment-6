import Chart from "./Chart";

const Dashboard = () => {
  return (
    <div className="px-7 mx-12 mt-10">
      <div>
        <h2 className="text-xl md:text-3xl font-bold text-center">
          Donation Amounts
        </h2>
      </div>
      <div className="flex justify-center items-center">
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
