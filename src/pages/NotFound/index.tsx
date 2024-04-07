import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";

const NotFound = () => {
  return (
    <div>
      <Header />
      <PageContainer>
        <div className="mx-auto min-h-[80vh] w-[95%] py-10 text-center">
          <h1 className="mb-6 text-4xl font-bold text-purple-300">
            Page Not Found
          </h1>
          <p className="text-lg leading-relaxed text-gray-400">
            Sorry, the page you are looking for could not be found. It may have
            been removed or does not exist. Please check the URL and try again.
          </p>
        </div>
        <Footer />
      </PageContainer>
    </div>
  );
};

export default NotFound;
