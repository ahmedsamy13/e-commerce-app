import { useContext, useEffect, useState } from "react";
import { Shopcontext } from "../context/shopcontext";
import { products } from "../assets/assets";
import ProductItem from "./ProductItem";

export default function BesrSellers() {
  const { products } = useContext(Shopcontext);
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const BestSelled = products.filter((item) => item.bestseller);
    setBestSeller(BestSelled);
  }, []);
  return (
    <div className="my-10 lg:w-[80%] m-auto">
      <div className="flex justify-center items-center gap-2">
        <p className="text-3xl ">BEST SELLERS</p>
        <p className="w-8 h-[2px] bg-[#414141]"></p>
      </div>
      <div className="text-center my-3 m-auto max-w-[75%]">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
      </div>
      <div className="grid mt-10 max-md:grid-cols-3 max-sm:grid-cols-2 grid-cols-5 gap-4 gap-y-6 ">
        {bestSeller.map((item, index) => (
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
