import { TableCell, TableRow } from "flowbite-react";

interface TDonar {
  donerName: string;
  donerAmount: string;
}

const DonarData = ({ donar }: { donar: TDonar }) => {
  return (
    <TableRow className="bg-white border">
      <TableCell>{donar.donerName || "John doe"}</TableCell>
      <TableCell>{donar.donerAmount || "000"}</TableCell>
    </TableRow>
  );
};

export default DonarData;
