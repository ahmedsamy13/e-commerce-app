import { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/shopcontext";
import ProductItem from "./ProductItem";

export default function RelatedProducts({ category, subCategory }) {
  const { products } = useContext(Shopcontext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const productCopy = products.filter(
      (item) => item.category === category || item.subCategory === subCategory
    );
    setRelatedProducts(productCopy);
  }, [products, category, subCategory]);

  const shownRelatedItem = relatedProducts.slice(0, 5);

  return (
    <div className="my-[100px]">
      <div className="flex justify-center items-center gap-2 mb-[60px]">
        <h1 className="text-center text-4xl">You May Also Like</h1>
        <p className="w-8 h-[2px] bg-[#414141]"></p>
      </div>
      <div className="grid grid-cols-5 max-md:grid-cols-3 max-sm:grid-cols-2 gap-6">
        {shownRelatedItem.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
