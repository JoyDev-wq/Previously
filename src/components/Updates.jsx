import React from "react";
import update_img1 from "../assets/update1.jpg";
import update_img2 from "../assets/update2.png";
import update_img3 from "../assets/update3.png";

const Updates = () => {
  return (
    <div className="w-full mt-18 mb-10 lg:mb-2">
      <div className="w-full border-t border-white"> 
        <h1 className="mt-8 text-white text-2xl text-center tracking-widest" style={{fontFamily:"Acumin"}}>UPDATES</h1>
        <div className="w-full py-8 flex flex-col lg:flex-row justify-between gap-16 lg:gap-6">
          <div className="w-full lg:w-[32%] cursor-pointer" style={{ fontFamily: "Acumin"}}>
            <img className="w-full rounded-xl " src={update_img1} alt="" />
            <p className="mt-[1.3rem] text-white text-[1.4rem] font-light tracking-wide" >Meet Our 2023 PU x AUT Scholarship Recipient: Lee Makatoa</p>
          </div>
          <div className="w-full lg:w-[32%] cursor-pointer" style={{ fontFamily: "Acumin"}}>
            <img className="w-full rounded-xl" src={update_img2} alt="" />
            <p className="mt-[1.3rem] text-white text-[1.4rem] font-light tracking-wide">Big Milestone for Tracksuit and Investors in 2024</p>
          </div>
          <div className="w-full lg:w-[32%] cursor-pointer" style={{ fontFamily: "Acumin"}}>
            <img className="w-full rounded-xl" src={update_img3} alt="" />
            <p className="mt-[1.3rem] text-white text-[1.4rem] font-light tracking-wide">
              Event | Where are all the brand, design and marketing leaders on
              start-up boards?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
{/* style={{ fontFamily:"Acumin" }} */}