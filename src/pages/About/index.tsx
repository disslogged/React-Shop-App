import Footer from "../../components/Footer";
import Header from "../../components/Header";
import PageContainer from "../../components/PageContainer";

const About = () => {
  return (
    <div>
      <Header />
      <PageContainer>
        <div className="mx-auto min-h-[80dvh] w-[95%] py-10">
          <h1 className="mb-6 text-4xl font-bold text-purple-300">
            About Our Product Website
          </h1>
          <p className="text-lg leading-relaxed text-gray-400">
            Welcome to our product website! We are dedicated to providing the
            best selection of high-quality products for our customers. Our
            mission is to offer a seamless shopping experience, with a wide
            range of products to choose from, easy navigation, and secure
            checkout.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            At our website, you'll find everything you need, from electronics
            and gadgets to home essentials and fashion items. We work tirelessly
            to curate the latest trends and must-have products, ensuring that
            you always stay ahead of the curve.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            Our team is passionate about customer satisfaction, and we strive to
            provide excellent customer service at every step of your shopping
            journey. Whether you have a question about a product or need
            assistance with your order, our friendly support team is here to
            help.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            Thank you for choosing our product website. We appreciate your
            support and look forward to serving you for all your shopping needs!
          </p>
        </div>
        <Footer />
      </PageContainer>
    </div>
  );
};

export default About;
