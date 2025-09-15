import { useContext, useState } from "react";
import { Shopcontext } from "./../context/shopcontext";
import { assets } from "../assets/assets";
import ProductItem from "../components/ProductItem";
import Product from "./Product";

export default function Collection() {
  const { products } = useContext(Shopcontext);
  const [showFilter, setShowFilter] = useState(true);
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [kids, setKids] = useState(false);
  const [top, setTop] = useState(false);
  const [bottom, setBottom] = useState(false);
  const [winter, setWinter] = useState(false);
  function filterproduct(products) {
    return products.filter((items) =>
      !men && !women && !kids && !top && !bottom && !winter
        ? true
        : (men && items.category === "Men") ||
          (women && items.category === "Women") ||
          (kids && items.category === "Kids") ||
          (top && items.subCategory === "Topwear") ||
          (bottom && items.subCategory === "Bottomwear") ||
          (winter && items.subCategory === "Winterwear")
    );
  }
  const FilteredProducts = filterproduct(products);

  // const [category, setCategory] = useState([]);
  // const [subCategory, setSubCategory] = useState([]);
  // const toggleCatpgery = (e) => {
  //   if (category.include(e.target.value)) {
  //     setCategory((prev) => prev.filter((item) => item !== e.target.value));
  //   }
  //   else{
  //     setCategory(prev=>[...])
  //   }
  // };
  return (
    <div className="lg:w-[80%] mb-18 flex flex-col sm:flex-row sm:gap-10 pt-10 border-t m-auto">
      {/* {filter } */}
      <div className="min-w-60">
        <p className="my-2 text-xl flex items-center cursor-pointer gap-2">
          filters
          <img
            src={assets.dropdown_icon}
            onClick={(e) => setShowFilter((e) => !e)}
            className="h-4"
            alt=""
          />
        </p>
        <div
          className={`${
            showFilter ? "" : "hidden"
          } border py-3 mt-6 pl-5 border-gray-200`}
        >
          <p className="text-sm font-medium mb-3">CATEGORIES</p>
          <div className="flex flex-col text-gray-400 font-light">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                checked={men}
                onChange={(e) => setMen(e.target.checked)}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                checked={women}
                onChange={(e) => setWomen(e.target.checked)}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                checked={kids}
                onChange={(e) => setKids(e.target.checked)}
              />
              Kids
            </p>
          </div>
        </div>
        <div
          className={`${
            showFilter ? "" : "hidden"
          } border py-3 mt-6 pl-5 border-gray-200`}
        >
          <p className="text-sm font-medium mb-3">TYPE</p>
          <div className="flex flex-col text-gray-400 font-light">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                checked={top}
                onChange={(e) => setTop(e.target.checked)}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                checked={bottom}
                onChange={(e) => setBottom(e.target.checked)}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                checked={winter}
                onChange={(e) => setWinter(e.target.checked)}
              />
              Winterwear
            </p>
          </div>
        </div>
      </div>
      <div className="grid mt-16 max-md:grid-cols-3 max-sm:grid-cols-2 grid-cols-4 gap-4 gap-y-6">
        {FilteredProducts.map((item, index) => (
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
