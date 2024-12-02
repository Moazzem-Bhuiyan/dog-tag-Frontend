import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import Image from "next/image";
  
  const OrderHistoryTable = () => {
    const TABLE_HEADERS = [
      "Order ID",
      "Total Product",
      "Total Amount",
      "Date",
      "Order Status",
    ];
  
    // Sample static data for orders
    const orders = [
      { id: "#12345ABC", totalProduct: 3, totalAmount: 100, date: "01-Jan-2024", status: "pending" },
      { id: "#67890DEF", totalProduct: 5, totalAmount: 200, date: "02-Feb-2024", status: "processing" },
      { id: "#11223GHI", totalProduct: 2, totalAmount: 50, date: "03-Mar-2024", status: "delivered" },
      { id: "#44556JKL", totalProduct: 4, totalAmount: 150, date: "04-Apr-2024", status: "pending" },
    ];
  
    return (
      <div className="flex flex-col w-full my-20 px-10">
        <div className="flex justify-between items-center py-4 border-b border-primary-black/40">
          <h2 className="text-base font-semibold text-primary-black">Order History</h2>
        </div>
        <div className="max-h-[700px] overflow-auto">
          <Table className="rounded-lg border border-primary-black/40">
            <TableCaption>A list of your orders.</TableCaption>
            <TableHeader>
              <TableRow>
                {TABLE_HEADERS.map((header) => (
                  <TableHead
                    key={header}
                    className="border border-primary-black/40 text-base font-semibold text-primary-black"
                  >
                    {header}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="border border-primary-black/40 text-base font-medium text-primary-black">
                    {order.id}
                  </TableCell>
                  <TableCell className="border border-primary-black/40 text-base font-medium text-primary-black">
                    {order.totalProduct}
                  </TableCell>
                  <TableCell className="border border-primary-black/40 text-base font-medium text-primary-black">
                    ${order.totalAmount.toFixed(2)}
                  </TableCell>
                  <TableCell className="border border-primary-black/40 text-base font-medium text-primary-black">
                    {order.date}
                  </TableCell>
                  <TableCell
                    className={`border border-primary-black/40 text-base font-medium ${
                      order.status === "delivered"
                        ? "text-success"
                        : order.status === "processing"
                        ? "text-yellow-600"
                        : "text-blue-600"
                    }`}
                  >
                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  };
  
  export default OrderHistoryTable;
  