import { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/shopcontext";
import Title from "./Title";
import ProductItem from "./ProductItem";

export default function LatestCollection() {
  const { products } = useContext(Shopcontext);
  const [latestProducts, setLatestProducts] = useState([]);
  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);
  return (
    <div className="lg:w-[80%] m-auto">
      <div className="my-10  ">
        <div className="text-center py-2 text-3xl">
          <Title />
          <p className="text-gray-600 m-auto text-xs w-3/4 sm:text-sm md:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the.
          </p>
        </div>
      </div>
      <div className="grid max-md:grid-cols-3 max-sm:grid-cols-2 grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
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
