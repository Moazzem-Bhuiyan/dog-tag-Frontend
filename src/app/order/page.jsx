"use client"

import { useSearchParams } from "next/navigation";








const OrderPage = () => {
  const productInfo = useSearchParams().get("product")
  console.log("data",productInfo)

//   const subtotal = parseFloat(price) * parseInt(quantity, 10);
//   const shipping = 0; // Example static shipping
//   const total = subtotal + shipping;

  return (
    <div>
      <h1>Order Summary</h1>
      {/* <div>
        <h2>{name}</h2>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <p>Subtotal: ${subtotal}</p>
        <p>Shipping: Free</p>
        <p>Total: ${total}</p>
      </div> */}

      {/* Optionally include a button for the user to complete the purchase */}
      <button>Complete Purchase</button>
    </div>
  );
};

export default OrderPage;

