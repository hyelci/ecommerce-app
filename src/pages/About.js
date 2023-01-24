import PageHeader from "../components/PageHeader";
import heroBcg from "../assets/hero-bcg.jpeg";

export default function About() {
  return (
    <div>
      <div>
        <PageHeader title="About" />
      </div>
      <div className="row m-5">
        <div className="col-5 justify-content-around pl-5">
          <img className="about-img" src={heroBcg} alt="" />
        </div>
        <div className="col-5 m-5 justify-content-around">
          <h1 className=" font-weight-bold">Our Story</h1>
          <p className="about-text mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
            perferendis deleniti accusamus laudantium ab magni voluptatum totam
            dolorem sapiente aliquam qui a consequatur modi nesciunt vero cum,
            reprehenderit debitis eius. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Molestias in fugiat aliquid, odit expedita sint
            corrupti cum ipsa magni velit eaque, exercitationem eligendi et
            commodi minus accusantium sequi dignissimos cupiditate?
          </p>
        </div>
      </div>
    </div>
  );
}
