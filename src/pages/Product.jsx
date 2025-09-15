import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shopcontext } from "../context/shopcontext";

export default function Product() {
  const { productId } = useParams();
  const { products, currency } = useContext(Shopcontext);
  const [productData, setProductDate] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProduuctData = () => {
    const product = products.find((product) => product._id === productId);
    if (product) {
      setProductDate(product);
      setImage(product.image[0]);
    }
  };

  useEffect(() => {
    fetchProduuctData();
  }, [productId]);

  if (!productData) {
    return <p className="text-center py-10">Loading...</p>;
  }

  return (
    <div className="border-t-2 w-[80%] m-auto py-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 flex-col sm:flex-row items-start">
        {/* الصور */}
        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:w-1/2">
          {/* Thumbnails */}
          <div className="flex sm:flex-col overflow-x-auto gap-x-2 sm:gap-y-2 sm:w-[20%]">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className={`w-[24%] sm:w-full cursor-pointer rounded-md border ${
                  image === item ? "border-black" : "border-gray-200"
                }`}
                alt=""
              />
            ))}
          </div>

          {/* Main image */}
          <div className="sm:w-[80%]">
            <img
              src={image}
              className="w-full h-auto rounded-md border"
              alt={productData.name}
            />
          </div>
        </div>

        {/* معلومات المنتج */}
        <div className="sm:w-1/2 flex flex-col gap-3">
          {/* الاسم */}
          <h1 className="font-semibold text-2xl">{productData.name}</h1>

          {/* السعر */}
          <p className="text-xl font-bold text-gray-800">
            {currency}
            {productData.price}
          </p>

          {/* الوصف */}
          <p className="text-gray-600 leading-relaxed">
            {productData.description}
          </p>

          {/* المقاسات */}
          <div>
            <p className="font-medium mb-2">Select Size:</p>
            <div className="flex gap-3">
              {productData.sizes.map((s, index) => (
                <button
                  key={index}
                  onClick={() => setSize(s)}
                  className={`px-4 py-2 border rounded-md ${
                    size === s
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* زرار الكارت */}
          <button className="mt-4 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
