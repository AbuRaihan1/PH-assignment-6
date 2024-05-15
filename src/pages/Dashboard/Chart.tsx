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

      <div className="mb-10 border border-red-300 pb-10">
        <DonarTableWrapper />
      </div>
    </>
  );
};

export default Chart;
