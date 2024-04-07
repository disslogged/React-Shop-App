export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  images: string[];
};
