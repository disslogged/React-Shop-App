import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";
import {
  useCheckoutDispatch,
  useCheckoutSelector,
} from "../../store/useCheckoutSlice";
import { removeFromBasket } from "../../store/checkoutSlice";
import toast, { Toaster } from "react-hot-toast";

const Checkout = () => {
  const notification = (quantity: number) =>
    toast(`item ${quantity === 1 ? "removed" : "decreased"}`, {
      duration: 3000,
      position: "top-center",

      // Styling
      style: {},
      className: "bg-red-300 text-red-900",

      // Custom Icon
      icon: "❌",

      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });
  const dispatch = useCheckoutDispatch();
  const { basket, totalPrice } = useCheckoutSelector((store) => store.checkout);

  const handleRemove = (id: number) => {
    dispatch(removeFromBasket(id));
  };

  return (
    <>
      <Header />
      <PageContainer>
        <div className="mx-auto mt-4 w-[95%] pb-8">
          <p className="bg-gradient-to-l from-accent from-80% to-purple-900 bg-clip-text font-protest text-4xl text-transparent">
            CHECKOUT NOW
          </p>
          <Toaster />
          <table className="mt-5 min-w-full">
            <thead className="rounded-md border border-[#800080] text-cyan-300 shadow-[0px_0px_8px_#800080]">
              <tr>
                <th className="w-max px-6 py-3 text-left">Name</th>
                <th className="w-max px-6 py-3 text-left">Price</th>
                <th className="w-max px-6 py-3 text-left">Quantity</th>
                <th className="w-max px-6 py-3 text-left">Subtotal</th>
                <th className="w-max px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-purple-300">
              {basket.map((product) => (
                <tr key={product.id}>
                  <td className="whitespace-nowrap px-6 py-6 text-white">
                    {product.title}
                  </td>
                  <td className="whitespace-nowrap px-6 py-6 font-protest text-green-300">
                    {product.price} $
                  </td>
                  <td className="whitespace-nowrap px-6 py-6 text-yellow-300">
                    {product.quantity}
                  </td>
                  <td className="whitespace-nowrap px-6 py-6 font-protest text-blue-600">
                    {product.price * product.quantity} $
                  </td>
                  <td className="whitespace-nowrap px-6 py-6 text-red-300">
                    <button
                      className="hover:text-red-700"
                      onClick={() => {
                        handleRemove(product.id);
                        notification(product.quantity);
                      }}
                    >
                      {product.quantity === 1 ? "Remove" : "Decrease"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6">
            <p className="text-2xl font-bold text-green-700">
              Total Price: <span className="font-protest">{totalPrice} $</span>
            </p>
            <button className="mt-4 block rounded-md bg-blue-500 px-4 py-2 text-center text-xl text-white transition duration-300 hover:bg-blue-200 hover:text-purple-800">
              Proceed to Payment
            </button>
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default Checkout;
