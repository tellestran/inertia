import React from "react";
import Logo from "../assets/logo.webp";


const Footer = () => {
  const Features = [
    {
      id: 1,
      content: "author page",
    },
    {
      id: 2,
      content: "search page",
    },
    {
      id: 3,
      content: "category page",
    },
    {
      id: 4,
      content: "services",
    },
    {
      id: 5,
      content: "about",
    },
    {
      id: 6,
      content: "page markup",
    },
    {
      id: 7,
      content: "fullwidth page",
    },
    {
      id: 8,
      content: "aligned page",
    },
    {
      id: 9,
      content: "error page",
    },
    {
      id: 10,
      content: "contact us",
    },
  ];

  const Shop = [
    {
      id: 1,
      content: "shop demo",
    },
    {
      id: 2,
      content: "cart",
    },
    {
      id: 3,
      content: "checkout",
    },
  ];

  const Theme = [
    {
      id: 1,
      content: "home",
    },
    {
      id: 2,
      content: "buy theme",
    },
    {
      id: 3,
      content: "demos",
    },
    {
      id: 4,
      content: "documentation",
    },
    {
      id: 5,
      content: "support",
    },
  ];

  return (
    <div className="py-8 w-full flex justify-center align-center items-center bg-[--color-white] ">
      <div className="max-w-[1200px] w-[1200px] ">
        <div className="grid grid-cols-2 gap-12 border-b-2 pb-6 border-solid">
          <div>
            <div>
              <img src={Logo} className="w-[133px] h-auto pt-3 pb-7" />
            </div>
            <div className="pb-7">
              <p className="max-w-[440px] text-[0.9rem]">
                Inertia is a premium multiuse wordpress theme made for
                magazines, blogs and creators.{" "}
              </p>
              <p>&nbsp;</p>
              <p className="max-w-[440px] text-[0.9rem]">
                Lightweight wordpress theme, SEO-Optimized, Providing blazing
                fast performance and speed. In addition to being
                accessibility-compliant theme and loaded with features with more
                that 100 options to provide maximum flexibility to users.
              </p>
            </div>
            <div className="linked-item pt-7">
              <ul className="uppercase flex pl-0 pr-1.5 text-[0.8rem] font-[700] tracking-[1px] flex-wrap flex-start gap-7 align-center ">
                <li className="pl-0 cursor-pointer hover:scale-90 duration-300">
                  about us
                </li>
                <li className="cursor-pointer hover:scale-90 duration-300">
                  service
                </li>
                <li className="cursor-pointer hover:scale-90 duration-300">
                  shop
                </li>
                <li className="cursor-pointer hover:scale-90 duration-300">
                  contact us
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex-col">
              <p className="mb-4 font-[600]">Features</p>
              <ul className="text-left">
                {Features.map((feature) => (
                  <li
                    key={feature.id}
                    className="py-1.5 opacity-80 font-light text-[0.9rem] capitalize cursor-pointer hover:scale-90 duration-300"
                  >
                    {feature.content}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-col">
              <p className="mb-4 font-[600]">Shop</p>
              <ul className="text-left">
                {Shop.map((shop) => (
                  <li
                    key={shop.id}
                    className="py-1.5 opacity-80 font-light text-[0.9rem] capitalize cursor-pointer hover:scale-90 duration-300"
                  >
                    {shop.content}
                  </li>
                ))}
              </ul>
              <p>&nbsp;</p>
              <div className="Inertia Theme">
                <p className="mb-5 font-[600]">Inertia Theme</p>
                <ul className="text-left">
                  {Theme.map((theme) => (
                    <li
                      key={theme.id}
                      className="py-1.5 opacity-80 font-light text-[0.9rem] capitalize cursor-pointer hover:scale-90 duration-300"
                    >
                      {theme.content}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
