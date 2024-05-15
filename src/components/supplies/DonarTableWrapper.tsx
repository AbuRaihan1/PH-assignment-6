import { Table, TableBody, TableHead, TableHeadCell } from "flowbite-react";
import { useGetDonarsDataQuery } from "../../redux/api/api";
import DonarData from "./DonarData";
const DonarTableWrapper = () => {
  const { data: donateData, isLoading: donateLoading } =
    useGetDonarsDataQuery("");

  return (
    <div>
      <div className="mx-auto mb-10 border-2">
        <h2 className="text-center text-xl md:text-3xl mb-6">Doner details</h2>
        {donateData?.length > 0 ? (
          <Table striped className="w-full md:max-w-xl mx-auto mb-10 pb-10 border-red-400 border">
            <TableHead>
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
    </div>
  );
};

export default DonarTableWrapper;
