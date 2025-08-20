import { getData } from "@/_utils/api-helper";

export default async function TotalPrice() {
  const products = await getData(
    "http://localhost:8000/products",
    "TotalPrice Component",
    { cache: "no-store" }
  );
  const totalPrice = products.reduce(
    (total, product) => total + product.price,
    0
  );
  return <div>💰 Total Price: ${totalPrice}</div>;
}
