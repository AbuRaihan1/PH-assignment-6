import { Cell, Pie, PieChart, Tooltip, XAxis } from "recharts";

const data = [
  { name: "Raihan", value: 400 },
  { name: "Shiblu", value: 300 },
  { name: "Tutul", value: 300 },
  { name: "Ratul", value: 200 },
];

const arr1 = [
  { name: "apple", price: 5 },
  { name: "apple", price: 4 },
  { name: "apple", price: 10 },
];

const arr2 = [
  { name: "apple", quantity: 2 },
  { name: "apple", quantity: 1 },
  { name: "apple", quantity: 3 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Chart = () => {
  return (
    <PieChart width={300} height={300}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        <XAxis dataKey="name" />
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default Chart;
