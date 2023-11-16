import React from "react";

const NavWrapper = () => {
  const NavElements = [
    { id: 1, src: "#", element: "trending" },
    { id: 2, src: "#", element: "lifestyle" },
    { id: 3, src: "#", element: "beauty" },
    { id: 4, src: "#", element: "decor" },
    { id: 5, src: "#", element: "nutrition" },
    { id: 6, src: "#", element: "travel" },
    { id: 7, src: "#", element: "wellbeing" },
    { id: 8, src: "#", element: "workout" },
    { id: 9, src: "#", element: "diy" },
  ];
  return (
    <nav className="flex justify-center items-center space-x-4 text-[12px] uppercase text-[#404040] bg-[#ffffff] header-shadow dark:!bg-black dark:!text-white">
      {NavElements.map((navelement) => (
        <a key={navelement.key} href="#" className="px-4 py-2 rounded">
          {navelement.element}
        </a>
      ))}
    </nav>
  );
};

export default NavWrapper;
