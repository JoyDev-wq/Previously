import React, { useEffect } from "react";
import you from "../../assets/youarehere.svg";
import arrow from "../../assets/footer-arrow.svg";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Menu = ({ menuOpen }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      console.log("Menu clicked");
    } else {
      document.body.style.overflow = "auto";
    }

  //  const tl = gsap.timeline();

  //   tl.from(".t5", {
  //     x: -300,
  //     duration: 0.2,
  //     ease: "power2.out",
  //   })
  //     .from(".t4", {
  //       x: -300,
  //       duration: 0.2,
  //       ease: "power2.out",
  //     })
  //     .from(".t3", {
  //       x: -200,
  //       duration: 0.2,
  //       ease: "power2.out",
  //     })
  //     .from(".t2", {
  //       x: -200,
  //       duration: 0.2,
  //       ease: "power2.out",
  //     })
  //     .from(".t1", {
  //       x: -200,
  //       duration: 0.1,
  //       ease: "power2.out",
  //     });

    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  if (!menuOpen) return null;

  return (
    <div className="w-full py-20 bg-black z-10">
      <div className="t1 container py-6 flex justify-between ">
        <p className="text-7xl" style={{ fontFamily: "myfont" }}>
          Our World
        </p>
        <img src={you} className="w-54" alt="" />
      </div>

      <div className="t2 border-t-2 border-white container py-6 flex justify-between hover-font cursor-pointer">
        <p className="text-7xl ">What we do </p>
        <img className="w-28" src={arrow} alt="" />
      </div>
      
      <div className="t3 border-t-2 border-white container py-6 flex justify-between hover-font cursor-pointer" onClick={()=>navigate("/who-we-are")}>
        <p className="text-7xl">Who we are </p>
        <img className="w-28" src={arrow} alt="" />
      </div>
      
      <div className="t4 border-t-2 border-white container py-6 flex justify-between hover-font cursor-pointer">
        <p className="text-7xl ">Track Record </p>
        <img className="w-28" src={arrow} alt="" />
      </div>
      
      <div className="t5 border-t-2 border-white border-b-2 container py-6 flex justify-between hover-font cursor-pointer">
        <p className="text-7xl ">Contact </p>
        <img className="w-28" src={arrow} alt="" />
      </div>
      
    </div>
  );
};

export default Menu;
