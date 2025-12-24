import React from "react";
import link, { link1, link2 } from "../../world.js";

const World = () => {
  return (
    <div className="p-3 lg:p-12">
      <div className="">
        <hr className="mb-[2rem]" />
        <h1
          className="text-center text-[1.1rem] tracking-wide"
          style={{ fontFamily: "Acumin" }}
        >
          OUR WORLD
        </h1>
        <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-[3rem]">
          <div className="w-full lg:w-[32%]">
            {link.map((item, index) => (
              <div key={index} className="">
                <div className="flex flex-col cursor-pointer">
                  <div className="overflow-hidden rounded-[10px] mt-12">
                    <img src={item.img} className="h-full w-full object-cover rounded-[10px] transition-transform duration-500 ease-in-out overflow-hidden hover:rounded-[10px] hover:scale-105" alt="" />
                  </div>
                  <p
                    className="mb-4 text-[21px] mt-4 "
                    style={{ fontFamily: "Acumin" }}
                  >
                    {item.para}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-[32%]">
            {link1.map((item, index) => (
              <div key={index} className="">
                <div className="flex flex-col cursor-pointer">
                  <div className="overflow-hidden rounded-[10px] mt-12">
                    <img src={item.img} className="w-full object-cover rounded-[10px] transition-transform duration-500 ease-in-out overflow-hidden hover:rounded-[10px] hover:scale-105" alt="" />
                  </div>
                  <p
                    className="mb-4 text-[21px] mt-4 "
                    style={{ fontFamily: "Acumin" }}
                  >
                    {item.para}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-[32%]">
            {link2.map((item, index) => (
              <div key={index} className="">
                <div className="flex flex-col cursor-pointer">
                  <div className="overflow-hidden rounded-[10px] mt-12">
                    <img src={item.img} className="w-full object-cover rounded-[10px] transition-transform duration-500 ease-in-out overflow-hidden hover:rounded-[10px] hover:scale-105" alt="" />
                  </div>
                  <p
                    className="mb-4 text-[21px] mt-4 "
                    style={{ fontFamily: "Acumin" }}
                  >
                    {item.para}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default World;

{
  /* < div>
                
            </div>
            <div></div>
            <div></div> */
}
