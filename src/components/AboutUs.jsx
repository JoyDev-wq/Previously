import React,{useEffect} from "react";
import arrow from "../assets/footer-arrow.svg";
import you from "../assets/youarehere.svg";
import "./AboutUs.css";

const AboutUs = ({ menuOpen }) => {
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  if (!menuOpen) return null;

  return (
    <div className="relative py-8 bg-black text-white w-full flex flex-col justify-center items-center text-center z-1">
      <div className="mt-16 w-[67vw]">
        <p className="text-[50px] leading-14">
          <span style={{ fontFamily: "myitalic" }}>
            The best way to predict the future is to create it.
          </span>

          <span style={{ fontFamily: "myfont" }}>
            {" "}
            &nbsp;We are an innovation studio, and we work with ambitious
            leaders who are inventing or reinventing. What’s the future you want
            to create?
          </span>
        </p>
        <button
          className="mt-20 border border-white rounded-full py-1 px-4 text-[1.1rem]  cursor-pointer hover:bg-white hover:text-black"
          style={{ transition: "0.3s ease-in-out" }}
        >
          What we do
        </button>
      </div>

      {/* Menu */}
      <div className="w-full absolute bg-black top-[1rem] px-[8rem] py-[4rem] z-10">
        <div className="container py-8 flex justify-between">
          <p className="text-7xl" style={{ fontFamily: "myfont" }}>
            Our World
          </p>
          <img src={you} className="w-75" alt="" />
        </div>
        <hr className="text-white " />
        <div className="container py-8 flex justify-between hover-font">
          <p className="text-7xl ">What we do </p>
          <img className="w-28" src={arrow} alt="" />
        </div>
        <hr className="text-white " />
        <div className="container py-8 flex justify-between hover-font">
          <p className="text-7xl">Who we are </p>
          <img className="w-28" src={arrow} alt="" />
        </div>
        <hr className="text-white " />
        <div className="container py-8 flex justify-between hover-font">
          <p className="text-7xl ">Track Record </p>
          <img className="w-28" src={arrow} alt="" />
        </div>
        <hr className="text-white" />
        <div className="container py-8 flex justify-between hover-font">
          <p className="text-7xl ">Contact </p>
          <img className="w-28" src={arrow} alt="" />
        </div>
        <hr className="text-white" />
      </div>
    </div>
  );
};

export default AboutUs;
