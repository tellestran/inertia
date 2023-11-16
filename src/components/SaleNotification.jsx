import React from 'react'

const SaleNotification = () => {
  return (
    <div className="dark:!bg-black dark:!text-white">
      <p className=" w-full h-[20px] py-4 flex text-sm uppercase justify-center align-center items-center  text-[--color-white] bg-[#312e81] font-semibold">
        {" "}
        15% Off - sale for limited time
      </p>
    </div>
  );
}

export default SaleNotification
