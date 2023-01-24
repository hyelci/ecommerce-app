import { useProductsContext } from "../context/ProductsContext";

import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function SingleProductImages() {
  const { singleProduct } = useProductsContext();
  const { images } = singleProduct;

  const indicators = (index) => (
    <div className="indicator mb-5">
      <img
        src={images[index].thumbnails.large.url}
        width="90"
        className="px-2"
      />
    </div>
  );

  return (
    <Slide indicators={indicators}>
      {images.map((image) => {
        return (
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${image.url})` }}></div>
          </div>
        );
      })}
    </Slide>
  );
}
