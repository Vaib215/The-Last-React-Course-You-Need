import ProductImage1 from "../images/image-product-1.jpg";
import ProductImage2 from "../images/image-product-2.jpg";
import ProductImage3 from "../images/image-product-3.jpg";
import ProductImage4 from "../images/image-product-4.jpg";
import ProductImage1Thumb from "../images/image-product-1-thumbnail.jpg";
import ProductImage2Thumb from "../images/image-product-2-thumbnail.jpg";
import ProductImage3Thumb from "../images/image-product-3-thumbnail.jpg";
import ProductImage4Thumb from "../images/image-product-4-thumbnail.jpg";
import { useState } from "react";
const ProductImage = () => {
  const productImages = [
    ProductImage1,
    ProductImage2,
    ProductImage3,
    ProductImage4,
  ];
  const productImagesThumb = [
    ProductImage1Thumb,
    ProductImage2Thumb,
    ProductImage3Thumb,
    ProductImage4Thumb,
  ];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  return (
    <div className="max-w-sm">
      <img
        src={productImages[activeImageIndex]}
        className="w-full rounded-xl"
        alt=""
      />
      <ul className="grid grid-cols-4 gap-4 py-4">
        {productImagesThumb.map((img, index) => {
          return (
            <img
              src={img}
              key={img}
              onClick={()=>setActiveImageIndex(index)}
              className={`rounded-md opacity-60 cursor-pointer ${
                index === activeImageIndex
                  ? "opacity-100 border-white border-2"
                  : ""
              } `}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductImage;
