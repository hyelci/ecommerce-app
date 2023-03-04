import Services from "../components/Services";
import Newsletter from "../components/Newsletter";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <FeaturedProducts />
      <Services />
      <Newsletter />
    </div>
  );
}
