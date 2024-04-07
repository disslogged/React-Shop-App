import { Product } from "../shared/types";

const fetchProduct = async (id: number) => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  if (!res.ok) throw new Error("something went wrong please try again!");

  const data: Product = await res.json();
  return data;
};

export default fetchProduct;
