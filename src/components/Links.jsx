import containers, { container1, container2 } from "../links.js";
import Updates from "./Updates.jsx";

const Links = () => {
  return (
    <div className="pt-24 px-8 w-full bg-black ">
      <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center gap-5 overflow-hidden">
        <div className="flex flex-col lg:w-[32%] flex-wrap gap-5 rounded-[10px]">
          {containers.map((data, index) => (
            <div key={index} className="flex flex-col cursor-pointer">
              <div className="overflow-hidden rounded-[10px]">

              <img
                src={data.image}
                className="w-full h-full rounded-[10px] transition-transform duration-200 ease-in-out overflow-hidden hover:rounded-[10px] hover:scale-105"
                alt=""
              />
              </div>
              <p
                className="text-white text-[1.2rem] mt-4"
                style={{ fontFamily: "Acumin" }}
              >
                {data.para}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:w-[32%] flex-wrap gap-5 rounded-[10px]">
          {container1.map((data, index) => (
            <div
              key={index}
              className=" relative flex flex-col cursor-pointer overflow-hidden rounded-[10px] "
            >
              <div className="overflow-hidden rounded-[10px] ">
                <img
                  src={data.image}
                  className="w-full h-full rounded-[10px] transition-transform duration-200 ease-in-out overflow-hidden hover:rounded-[10px] hover:scale-105"
                  alt=""
                />
              </div>
              <p
                className="text-white text-[1.2rem] mt-4"
                style={{ fontFamily: "Acumin" }}
              >
                {data.para}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:w-[32%] flex-wrap gap-5 rounded-[10px]">
          {container2.map((data, index) => (
            <div key={index} className="relative flex flex-col cursor-pointer overflow-hidden rounded-[10px]">
              <div className="overflow-hidden rounded-[20px] ">
                <img
                  src={data.image}
                  className="w-full h-full rounded-[10px] transition-transform duration-200 ease-in-out overflow-hidden hover:rounded-[10px] hover:scale-105"
                  alt=""
                />
              </div>
              <p
                className="text-white text-[1.2rem] mt-4"
                style={{ fontFamily: "Acumin" }}
              >
                {data.para}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 p-8 flex flex-wrap justify-center lg:justify-around items-center border border-white rounded-2xl gap-[4rem]">
        <div
          className="text-white text-center w-full sm:w-[45%] lg:w-[15%]"
          style={{ fontFamily: "Acumin" }}
        >
          <p className="text-6xl lg:text-8xl">30</p>
          <p className="uppercase text-[1.1rem] tracking-widest">
            equity projects
          </p>
        </div>
        <div
          className="text-white text-center w-full sm:w-[45%] lg:w-[25%]"
          style={{ fontFamily: "Acumin" }}
        >
          <p className="text-6xl lg:text-8xl">$500m+</p>
          <p className="w-[90%] lg:w-[80%] m-auto uppercase text-[1.1rem] tracking-widest">
            combined valuations of our 4 launched companies
          </p>
        </div>
        <div
          className="text-white text-center w-full sm:w-[45%] lg:w-[15%]"
          style={{ fontFamily: "Acumin" }}
        >
          <p className="text-6xl lg:text-8xl">11</p>
          <p className="uppercase text-[1.1rem] tracking-widest">
            Years in business
          </p>
        </div>
        <div
          className="text-white text-center w-full sm:w-[45%] lg:w-[15%]"
          style={{ fontFamily: "Acumin" }}
        >
          <p className="text-6xl lg:text-8xl">$12m</p>
          <p className="uppercase text-[1.1rem] tracking-widest">
            BRAND FUND 1+2
          </p>
        </div>
      </div>

      <Updates />
    </div>
  );
};

export default Links;
