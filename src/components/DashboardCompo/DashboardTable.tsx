import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { HiPencil, HiTrash } from "react-icons/hi";
import importedImg from "../../assets/foodPng.jpg";

function DashboardTable({ item }) {
  const { title, image, quantity, category } = item;

  return (
    <div className="overflow-x-auto">
      <Table striped>
        <TableHead>
          <TableHeadCell>Image</TableHeadCell>
          <TableHeadCell>Title</TableHeadCell>
          <TableHeadCell>Category</TableHeadCell>
          <TableHeadCell>Quantity</TableHeadCell>
          <TableHeadCell className="text-right">Actions</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y border border-red-600 space-y-2">
          <TableRow className="bg-white ">
            <TableCell className="whitespace-nowrap font-medium text-gray-900">
              <img className="h-12 w-28" src={importedImg} />
            </TableCell>
            <TableCell>{title}</TableCell>
            <TableCell>{category}</TableCell>
            <TableCell>{quantity}</TableCell>
            <TableCell>
              <div className="flex justify-end items-center gap-4">
                <HiPencil className="size-10 text-cyan-400 cursor-pointer p-2 bg-cyan-50 rounded-full hover:bg-cyan-100 " />
                <HiTrash className="size-10 text-red-600 cursor-pointer bg-red-100 hover:bg-red-300 rounded-full p-2 " />
              </div>
            </TableCell>
          </TableRow>
          {/* Add additional rows as needed */}
        </TableBody>
      </Table>
    </div>
  );
}

export default DashboardTable;
