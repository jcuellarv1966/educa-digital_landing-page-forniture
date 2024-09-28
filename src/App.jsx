import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeaturesSecond from "./components/FeaturesSecond";
import NewItems from "./components/NewItems";
import Products from "./components/Products";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
      <Header />
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <Products />
      <Pricing />
      <Testimonial />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
