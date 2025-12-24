import React, { useEffect } from "react";
import you from "../../assets/youarehere.svg";
import arrow from "../../assets/footer-arrow.svg";

const Menu = ({ menuOpen }) => {
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      console.log("Menu clicked");
    } else {
      document.body.style.overflow = "auto";
    }

    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  if (!menuOpen) return null;

  return (
    <div className="w-full bg-black z-10">
      <div className="container py-6 flex justify-between">
        <p className="text-7xl" style={{ fontFamily: "myfont" }}>
          Our World
        </p>
        <img src={you} className="w-54" alt="" />
      </div>
      <hr className="text-white " />
      <div className="container py-6 flex justify-between hover-font">
        <p className="text-7xl ">What we do </p>
        <img className="w-28" src={arrow} alt="" />
      </div>
      <hr className="text-white " />
      <div className="container py-6 flex justify-between hover-font">
        <p className="text-7xl">Who we are </p>
        <img className="w-28" src={arrow} alt="" />
      </div>
      <hr className="text-white " />
      <div className="container py-6 flex justify-between hover-font">
        <p className="text-7xl ">Track Record </p>
        <img className="w-28" src={arrow} alt="" />
      </div>
      <hr className="text-white" />
      <div className="container py-6 flex justify-between hover-font">
        <p className="text-7xl ">Contact </p>
        <img className="w-28" src={arrow} alt="" />
      </div>
      <hr className="text-white" />
    </div>
  );
};

export default Menu;
