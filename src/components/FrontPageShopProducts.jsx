import React from "react";
import ProductImg1 from "../assets/ProductImg1.webp";
import ProductImg2 from "../assets/ProductImg2.webp";
import ProductImg3 from "../assets/ProductImg3.webp";
import ProductImg4 from "../assets/ProductImg4.webp";

const FrontPageShopProducts = () => {
  const Products = [
    {
      id: 1,
      imgSrc: ProductImg1,
      category: "beauty",
      name: "the take it (all) off kit",
      price: "$11.05",
      linePrice: "",
      redPirce: "",
    },
    {
      id: 2,
      imgSrc: ProductImg2,
      category: "lifestyle product ",
      name: "Minty Mineral Hydration Mist",
      price: "$18.00 - $45.00",
      linePrice: "",

      redPirce: "",
    },
    {
      id: 1,
      imgSrc: ProductImg3,
      category: "skincare",
      name: "Cloudberry Exfoliating Jelly Cleanser",
      price: "",
      linePrice: "$20.00",
      redPirce: "$18.00",
    },
    {
      id: 1,
      imgSrc: ProductImg4,
      category: "cleansers",
      name: "Nourishing Repair Body Butter",
      price: "$18.00",
      linePrice: "",
      redPirce: "",
    },
  ];
  return (
    <div className="py-12 w-full flex justify-center align-center items-center dark:!bg-black dark:!text-white">
      <div className="max-w-[1200px] w-[1200px] justify-center items-center text-center align-center">
        <h2 className="text-4xl font-semibold capitalize tracking-[2px] py-6">
          Products We Love
        </h2>
        <p className="opacity-50 text-[1rem]">
          Featured products your will love from the shop.
        </p>
        <div className="grid grid-cols-4 my-1 gap-6 py-10 ">
          {Products.map((product) => (
            <div className="gridItem flex-col bg-[--color-white] box-shadow">
              <div className="itemImage">
                <a>
                  <img
                    src={product.imgSrc}
                    className="aspect-1/1 object-cover w-full"
                  />
                </a>
              </div>
              <div className="itemText text-left p-6 bg-white">
                <span className="uppercase text-[12px] font-[400]">
                  {product.category}
                </span>
                <h3 className="text-[1.1rem] capitalize font-semibold  my-2">
                  {product.name}
                </h3>
                <span className="text-[12px] font-light flex">
                  <span className="pr-2">{product.price}</span>
                  <span className="line-through pr-2">{product.linePrice}</span>
                  <span className="pl-2 text-[--color-red]">
                    {product.redPirce}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
        <button className="uppercase mt-6 py-4 px-20 text-[--color-white] bg-[--color-900] tracking-[1px] inline-block text-[0.85rem] cursor-pointer hover:bg-[#404040] duration-300">
          Shop All
        </button>
      </div>
    </div>
  );
};

export default FrontPageShopProducts;
