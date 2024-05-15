import {
  Button,
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
} from "flowbite-react";
import { Link } from "react-router-dom";
import DashboardTable from "../../components/DashboardCompo/DashboardTable";
import { useGetSuplliesQuery } from "../../redux/api/api";

const AllSupplies = () => {
  const { data, isLoading } = useGetSuplliesQuery("");
  console.log(data);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="my-12 px-5 mx-8">
        {data.length > 0 ? (
          <Table striped>
            <TableHead className="border sticky top-[-1px]">
              <TableHeadCell>Image</TableHeadCell>
              <TableHeadCell>Title</TableHeadCell>
              <TableHeadCell>Category</TableHeadCell>
              <TableHeadCell>Quantity</TableHeadCell>
              <TableHeadCell className="text-right">Actions</TableHeadCell>
            </TableHead>
            <TableBody className="border">
              {data && data.length > 0
                ? data.map((item, idx) => (
                    <DashboardTable item={item} key={idx} />
                  ))
                : ""}
            </TableBody>
          </Table>
        ) : (
          <div className="flex justify-center items-center">
            <div className="h-screen flex justify-center items-center flex-col gap-4 text-center">
              <p className="md:text-3xl text-2xl font-bold">
                No data available
              </p>
              <Link to="/dashboard/create-post">
                <Button>Create Post</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllSupplies;
