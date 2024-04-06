import { Table } from "../../components/table/Table";
import { TableHeader } from "../../components/table/TableHeader";
import { useOrder } from "../../useQuery/useOrder";
import OrderTable from "./orderTable";

const OrderPage = () => {
  const { data, refetch } = useOrder({
    customer_id: localStorage.getItem("userId") ?? "",
  });
  return (
    <>
      <div className="text-xl font-semibold my-4">Danh sách đơn hàng</div>

      <Table
        tableHeader={
          <TableHeader
            headers={[
              {
                label: "Số thứ tự",
              },
              {
                label: "Mã order",
              },
              {
                label: "Trạng thái ",
              },
              {
                label: "Mã người dùng ",
              },
              {
                label: "Tên người",
              },
              {
                label: "Ngày đặt",
              },
              {
                label: "",
              },
            ]}
          />
        }
        tableBody={<OrderTable data={data?.order} refetch={refetch} />}
        isEmpty={data?.product?.length === 0}
      />
    </>
  );
};

export default OrderPage;
