import { Cell, Pie, PieChart, Tooltip } from "recharts";
import DonarTableWrapper from "../../components/supplies/DonarTableWrapper";
import { useGetDonarsDataQuery } from "../../redux/api/api";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Chart = () => {
  const { data: getDonars, isLoading } = useGetDonarsDataQuery("");
  if (isLoading || !getDonars) {
    return <div>Loading...</div>;
  }
  const formattedData = getDonars.map((donor, index) => ({
    name: donor.donerName,
    value: parseFloat(donor.donerAmount),
    fill: COLORS[index % COLORS.length],
  }));

  return (
    <>
      <div className=" bg-gray-100 mb-10 pt-5 rounded-lg">
        <div>
          <h2 className="text-xl md:text-3xl font-bold text-center">
            Donar Chart
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <PieChart width={300} height={300}>
            <Pie
              dataKey="value"
              data={formattedData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {formattedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>

      <div className="">
        <DonarTableWrapper />
      </div>
    </>
  );
};

export default Chart;
