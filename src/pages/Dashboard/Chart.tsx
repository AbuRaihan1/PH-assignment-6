import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
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
      <div className=" bg-gray-100 mb-10 pt-5 pb-10 rounded-lg overflow-x-auto">
        <div>
          <h2 className="text-xl md:text-3xl font-bold text-center mb-4">
            Donar Chart
          </h2>
        </div>
        {getDonars.length > 0 ? (
          <div className="block mx-auto text-center lg:flex lg:justify-between lg:items-center">
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

            <BarChart
              width={400}
              height={300}
              data={formattedData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis
                dataKey="name"
                // scale="point"
                padding={{ left: 10, right: 10 }}
              />
              <YAxis dataKey="value" />
              <Tooltip />
              {/* <Legend /> */}
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="value" fill="#ff5200" />
            </BarChart>
          </div>
        ) : (
          <div>
            <h2 className="text-xl md:text-3xl text-center text-red-500">
              We haven't received any donation amount so far. :(
            </h2>
          </div>
        )}
      </div>

      <div className="">
        <DonarTableWrapper />
      </div>
    </>
  );
};

export default Chart;
