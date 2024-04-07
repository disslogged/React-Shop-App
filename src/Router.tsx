import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner";

const Home = lazy(() => import("./pages/Home"));
const Product = lazy(() => import("./pages/Home/components/Product"));
const Checkout = lazy(() => import("./pages/Checkout"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner fullScreen={true} />}>
        <Routes>
          <Route index element={<Navigate replace to="products" />} />
          <Route path="/products" element={<Home />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
