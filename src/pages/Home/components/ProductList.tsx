import { Product } from "../../../shared/types";
import ProductItem from "./ProductItem";

type ProductListProps = {
  data: Product[] | undefined;
};

const ProductList = ({ data }: ProductListProps) => {
  return (
    <div className="mt-2 grid min-h-screen min-w-full items-start gap-x-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data!.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}

      {data?.length === 0 && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 text-2xl">
          <p className="px-4 py-2 text-blue-200 underline decoration-purple-400 decoration-wavy underline-offset-[1rem]">
            there is no product with this category
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductList;
