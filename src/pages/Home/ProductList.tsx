import { Product } from "../../shared/types";
import ProductItem from "./ProductItem";

type ProductListProps = {
  data: Product[];
};

const ProductList = ({ data }: ProductListProps) => {
  return (
    <div className="mt-2 grid min-h-screen min-w-full items-start gap-x-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
