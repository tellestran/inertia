import React, { useState } from "react";
import { BsSearch, BsPinterest, BsInstagram, BsTwitter } from "react-icons/bs";

const FrontPageSubcribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    // Here you can handle the form submission, e.g., send the data to your server
  };
  return (
    <div className="py-8 w-full flex justify-center align-center items-center">
      <div className="max-w-[1200px] w-[1200px] bg-[--color-100] p-20">
        <div className="">
          <div className="grid grid-cols-2 gap-14">
            <div className="flex-col">
              <h2 className="text-[2.2rem] font-bold">Get the latest!</h2>
              <p className="opacity-60 py-4">
                Latest news and articles curated in your mailbox every week. No
                Spam. Guaranteed.
              </p>
              <div className="flex gap-10 opacity-70 pt-6">
                <BsInstagram
                  className="h-6 w-6 cursor-pointer duration-500 hover:scale-90 hover:text-[#ff8533]
]"
                />
                <BsPinterest className="h-6 w-6 cursor-pointer duration-500 hover:scale-90 hover:text-[#b30000]" />
                <BsTwitter className="h-6 w-6 cursor-pointer duration-500 hover:scale-90 hover:text-[#2ea2cc]" />
              </div>
            </div>
            <div className="formbox text-right relative ">
              <form onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email address here!"
                    className="p-4 w-full max-x-[600px] border-box bg-[--color-white] border-1 border-solid border-[#515151] rounded-[5px] text-left"
                  />
                  <button
                    type="submit"
                    className="text-[0.85rem] p-2.5 absolute top-1/2 -translate-y-1/2 right-2 text-center uppercase font-[500] cursor-pointer rounded-[5px] border-[--color-accent] bg-[--color-accent] text-[--color-white] hover:bg-black duration-300"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPageSubcribe;
