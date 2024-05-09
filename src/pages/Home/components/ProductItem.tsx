import { useNavigate } from "react-router-dom";
import { Product } from "../../../shared/types";
import { useCheckoutDispatch } from "../../../store/useCheckoutSlice";
import { addToBasket } from "../../../store/checkoutSlice";
import { useState, useRef, ChangeEvent, MouseEvent } from "react";
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
  const navigate = useNavigate();

  const handleAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const subTotal = product.price * quantity;
    notification();
    dispatch(addToBasket({ ...product, quantity, subTotal }));
    quantityRef.current?.blur();
    setQuantity(1);
  };

  const handleSelectProduct = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div
      onClick={handleSelectProduct}
      className="mb-2 mt-6 grid cursor-pointer rounded-md border border-purple-600 px-5 py-7 text-white transition duration-200 hover:shadow-[0_0px_10px_rgba(128,0,242,1)]"
    >
      <h2 className="mb-3 overflow-hidden text-ellipsis whitespace-nowrap text-xl font-bold text-blue-300">
        {product.title}
      </h2>
      <Toaster />
      <img src={product.images[0]} alt="product" className="rounded-md" />
      <div className="mt-8 flex items-center justify-between">
        <span className="block select-none font-protest text-2xl text-cyan-400">
          {product.price} $
        </span>
        <div className="z-10 flex items-center gap-2">
          <input
            type="number"
            min={1}
            max={99}
            className="countInput"
            value={quantity}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              e.stopPropagation();
              setQuantity(+e.currentTarget.value);
            }}
            ref={quantityRef}
            onClick={(e: MouseEvent) => e.stopPropagation()}
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
