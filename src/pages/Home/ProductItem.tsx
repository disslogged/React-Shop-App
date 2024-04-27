import { Link } from "react-router-dom";
import { Product } from "../../shared/types";
import { useCheckoutDispatch } from "../../store/useCheckoutSlice";
import { addToBasket } from "../../store/checkoutSlice";
import { useState, useRef, ChangeEvent } from "react";
import toast, { Toaster } from "react-hot-toast";

type ProductProps = {
  product: Product;
};

const ProductItem = ({ product }: ProductProps) => {
  const notification = () =>
    toast("Cart added to Basket", {
      duration: 3000,
      position: "top-center",

      // Styling
      style: {},
      className: "bg-blue-300 text-purple-900",

      // Custom Icon
      icon: "✔",

      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });

  const quantityRef = useRef<HTMLInputElement>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useCheckoutDispatch();

  const handleAddToCart = () => {
    const subTotal = product.price * quantity;
    notification();
    dispatch(addToBasket({ ...product, quantity, subTotal }));
    quantityRef.current?.blur();
    setQuantity(1);
  };

  return (
    <div className="mb-2 mt-6 grid rounded-md border border-purple-600 px-5 py-7 text-white transition duration-200 hover:shadow-[0_0px_10px_rgba(128,0,242,1)]">
      <h2 className="mb-3 overflow-hidden text-ellipsis whitespace-nowrap text-xl font-bold text-blue-300">
        {product.title}
      </h2>
      <Toaster />
      <img src={product.images[0]} alt="product" className="rounded-md" />
      <div className="mt-8 flex items-center justify-between">
        <span className="block select-none font-protest text-2xl text-cyan-400">
          {product.price} $
        </span>
        <div className="flex items-center gap-2">
          <Link
            to={String(product.id)}
            className="inline-block rounded-md border border-y-red-100 px-2 py-1 text-gray-200 transition duration-300 hover:border-violet-400"
          >
            View
          </Link>
          <input
            type="number"
            min={1}
            max={99}
            className="countInput"
            value={quantity}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setQuantity(+e.currentTarget.value)
            }
            ref={quantityRef}
          />
          <button className="addButton" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
