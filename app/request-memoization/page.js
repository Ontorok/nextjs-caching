import ProductCount from "@/_components/ProductCount";
import TotalPrice from "@/_components/TotalPrice";
import { getData } from "@/_utils/api-helper";

export async function generateMetadata() {
  const data = await getData(
    "http://localhost:8000/products",
    "generateMetadata()",
    { cache: "no-store" }
  );

  return {
    title: data.reduce(
      (title, product) => title + (title && ", ") + product?.title,
      ""
    ),
    description: "Apple iPhone 16 products",
  };
}

export default async function RequestMemoizationPage() {
  const products = await getData(
    "http://localhost:8000/products",
    "RequestMemoizationPage",
    { cache: "no-store" }
  );
  return (
    <div>
      <h1 className="font-bold text-4xl">Request Memoization</h1>
      <div className="mt-6">
        This page is statically rendered in{" "}
        <span className="text-blue-400">build time</span>. 3 components below do
        the same fetch call and deduped. Thanks to Request Memoization.
      </div>
      <div className="flex flex-col gap-10 mt-10 border rounded border-zinc-900 p-10">
        <div className="flex flex-col gap-4">
          <ProductCount />
          <div className="flex gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex rounded gap-6 bg-zinc-900 border-zinc-800 text-white w-4xl h-40 items-center justify-center font-bold text-2xl"
              >
                {product.title}
              </div>
            ))}
          </div>
          <TotalPrice />
        </div>
      </div>
    </div>
  );
}
