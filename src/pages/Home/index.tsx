import { useMemo, useState } from "react";
import { Outlet, useParams, useSearchParams } from "react-router-dom";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import fetchProducts from "../../api/apiFetchProducts";

import Header from "../../components/Header";
import HomeHeader from "./components/HomeHeader";
import ProductList from "./components/ProductList";
import Spinner from "../../components/Spinner";
import PageContainer from "../../components/PageContainer";
import Pagination from "./components/Pagination";
import Footer from "../../components/Footer";

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const selectedProduct = useParams().productId ? true : false;
  const [searchParams] = useSearchParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", currentPage],
    placeholderData: keepPreviousData,
    queryFn: () => fetchProducts(currentPage),
    staleTime: 5000,
    retry: false,
  });

  const products = useMemo(() => {
    return data && searchParams.get("category")
      ? data.filter(
          (product) => product.category.name === searchParams.get("category"),
        )
      : data;
  }, [data, searchParams]);

  return (
    <>
      <Header />
      <PageContainer>
        <div
          className={`border-t border-purple-300 pb-4 pt-5 sm:pt-7 ${selectedProduct ? "blur-md transition duration-100" : ""} min-h-[73dvh]`}
        >
          <div className="mx-auto w-[95%]">
            <HomeHeader />

            {/* loading state */}
            {isLoading && <Spinner fullScreen={true} />}

            {/* success state */}
            {data && (
              <ProductList
                data={products && products.length > 0 ? products : data}
              />
            )}

            {/* error state */}
            {isError && (
              <p className="absoluteCentered mx-auto w-4/5 border-2 border-red-500 px-3 py-2 text-justify text-xl text-red-700 shadow-2xl shadow-red-900 sm:w-auto">
                something went wrong. please try again!
              </p>
            )}
          </div>
        </div>
        <Outlet />
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </PageContainer>
      <Footer />
    </>
  );
};

export default Home;
