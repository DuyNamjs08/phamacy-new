import { PayPalButtons } from "@paypal/react-paypal-js";
const API_URL = "http://localhost:8017/api";
export default function Paypalpayment() {
  const createOrder = () => {
    return fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cart: [
          {
            sku: "namdz-0987",
            quantity: "120.0",
          },
        ],
      }),
    })
      .then((response) => {
        console.log("res", response);
        return response.json();
      })
      .then((order) => order.id);
  };
  const onApprove = (data) => {
    console.log(data);
    const orderID = data.orderID;
    return fetch(`${API_URL}/orders/${orderID}/capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    }).then((response) => response.json());
  };
  return (
    <PayPalButtons
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
  );
}
