import { useQuery } from "@tanstack/react-query";
import fetchProduct from "../../../api/apiFetchProduct";
import { useNavigate, useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Spinner from "../../../components/Spinner";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useCheckoutDispatch } from "../../../store/useCheckoutSlice";
import { ChangeEvent, useRef, useState } from "react";
import { addToBasket } from "../../../store/checkoutSlice";
import toast, { Toaster } from "react-hot-toast";

const Product = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const { productId } = useParams();
  const quantityRef = useRef<HTMLInputElement>(null);
  const dispatch = useCheckoutDispatch();
  const existId = productId ? true : false;
  const navigate = useNavigate();

  const { data: product, status } = useQuery({
    queryKey: ["products", productId],
    queryFn: () => fetchProduct(Number(productId)),
    enabled: existId,
  });

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

  const handleAddToCart = () => {
    if (!product) return;
    const subTotal = product.price * quantity;

    dispatch(addToBasket({ ...product, quantity, subTotal }));
    quantityRef.current?.blur();
    navigate("/products");
    notification();
  };

  return (
    <div className="fixed top-0 z-20 mx-auto flex h-full w-full items-center px-4">
      {/* backdrop */}
      <div
        className="w-ful absolute inset-0 z-30 h-full bg-black/80"
        onClick={() => navigate("/products")}
      ></div>

      {/* Content */}
      <div className="relative z-40 flex w-full flex-col items-center justify-center rounded-md border border-purple-900 bg-gradient-to-b from-purple-950 to-black to-100% px-5 py-7 md:mx-auto md:max-w-4xl md:flex-row">
        {/* loading state */}
        <Toaster />
        <XMarkIcon
          className="absolute right-2 top-2 w-12 cursor-pointer text-white"
          onClick={() => navigate("/products")}
        />
        {status === "pending" && <Spinner />}

        {/* success state */}
        {status === "success" && (
          <div className="md:flex md:items-center md:justify-center md:gap-10">
            <h2 className="mb-4 px-4 text-center text-xl font-bold text-blue-200 sm:text-2xl md:hidden md:text-3xl">
              {product?.title}
            </h2>
            <Swiper
              pagination={true}
              spaceBetween={30}
              modules={[Pagination]}
              loop={true}
              className="productSwiper max-w-[300px] xs:w-auto md:max-w-[400px] md:basis-[40%]"
            >
              {product.images.map((image, i) => (
                <SwiperSlide key={i} className="md:h-[400px] md:w-[400px]">
                  <img
                    src={image}
                    alt="product"
                    className="mb-4 block h-full w-full max-w-full rounded-md object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="basis-[60%]">
              <h2 className="mb-4 hidden px-4 text-xl font-bold text-blue-200 sm:text-2xl md:block md:px-0 md:text-3xl">
                {product?.title}
              </h2>
              <div>
                <p className="text-slate-300">{product?.description}</p>
              </div>
              <div className="mt-8 flex items-center justify-between xl:justify-start xl:gap-10">
                <span className="block select-none font-protest text-2xl text-cyan-400">
                  {product?.price} $
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    max={99}
                    value={quantity}
                    className="countInput"
                    ref={quantityRef}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setQuantity(+e.currentTarget.value)
                    }
                  />
                  <button className="addButton" onClick={handleAddToCart}>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* error state */}
        {status === "error" && (
          <div className="my-4 py-4">
            <p className="shadow-red -900 mx-auto w-4/5 border-2 border-red-500 px-3 py-2 text-justify text-xl text-red-700 shadow-2xl sm:w-auto">
              something went wrong. please try again!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
