import { Table, TableCell, TableRow } from "flowbite-react";
import { HiPencil, HiTrash } from "react-icons/hi";
import importedImg from "../../assets/foodPng.jpg";
import { useDeleteSuplliesMutation } from "../../redux/api/api";

type TItem = {
  title: string;
  image: string;
  quantity: string;
  category: string;
};

function DashboardTable({ item} ) {
  const { title, image, quantity, category } = item;
  const [deleteSupllies] = useDeleteSuplliesMutation();

  const options = {
    id: item._id,
    data: {
      title,
      image,
      quantity,
      category,
    },
  };

  const handleDelete = () => {
    deleteSupllies(options);
  };

  return (
    <TableRow className="bg-white">
      <TableCell className="whitespace-nowrap font-medium text-gray-900">
        <img className="h-12 w-28" src={importedImg} />
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{category}</TableCell>
      <TableCell>{quantity}</TableCell>
      <TableCell>
        <div className="flex justify-end items-center gap-4">
          <HiPencil className="size-10 text-cyan-400 cursor-pointer p-2 bg-cyan-50 rounded-full hover:bg-cyan-100 " />
          <HiTrash
            onClick={handleDelete}
            className="size-10 text-red-600 cursor-pointer bg-red-100 hover:bg-red-300 rounded-full p-2 "
          />
        </div>
      </TableCell>
    </TableRow>
  );
}

export default DashboardTable;
