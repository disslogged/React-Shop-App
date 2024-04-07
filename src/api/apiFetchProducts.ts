import { Product } from "../shared/types";

const fetchProducts = async (page: number) => {
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products?offset=${page * 25}&limit=25`,
  );
  if (!res.ok) throw new Error("something went wrong please try again!");

  const data: Product[] = await res.json();
  return data;
};

export default fetchProducts;
