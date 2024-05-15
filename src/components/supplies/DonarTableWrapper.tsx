import { Table, TableBody, TableHead, TableHeadCell } from "flowbite-react";
import { useGetDonarsDataQuery } from "../../redux/api/api";
import DonarData from "./DonarData";
const DonarTableWrapper = () => {
  const { data: donateData } = useGetDonarsDataQuery("");

  return (
    <>
      <div className="mx-auto mb-10 bg-gray-100 pt-7 pb-10 rounded-lg">
        <div>
          <h2 className="text-xl md:text-3xl font-bold text-center mb-10 mt-2">
            Donar List
          </h2>
        </div>
        {donateData?.length > 0 ? (
          <Table striped className="w-full md:max-w-xl mx-auto mb-10 pb-10">
            <TableHead className="border">
              <TableHeadCell>Donar Name</TableHeadCell>
              <TableHeadCell>Amount</TableHeadCell>
            </TableHead>
            <TableBody className="">
              {donateData?.map((donar, idx) => (
                <DonarData donar={donar} key={idx} />
              ))}
            </TableBody>
          </Table>
        ) : (
          <div>
            <h2 className="text-xl md:text-3xl text-center text-red-500">
              We haven't received any donation amount so far. :(
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default DonarTableWrapper;
