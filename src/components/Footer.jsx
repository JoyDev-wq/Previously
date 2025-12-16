import React from "react";
import fg_img from "../assets/footer-img.svg";
import arrow from "../assets/footer-arrow.svg";
const Footer = () => {
  return (
    <div className="mt-20 lg:mt-0 bg-black px-16 pt-27 pb-14">
      <hr className="text-white" />
      <div className="py-16 flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col gap-16">
          <img src={fg_img} className="w-20 hidden lg:block" alt="" />
          <div className="flex gap-4 justify-between">
            <div>
              <button className="px-4 py-1 text-white border-2 rounded-4xl border-white">
                Get in touch
              </button>
            </div>
            <div className="flex gap-6 flex-col lg:flex-row">
              <a href="" className="py-2 border-b-2 text-white border-white">
                Instagram
              </a>
              <a href="" className="py-2 border-b-2 text-white border-white">
                Facebook
              </a>
              <a href="" className="py-2 border-b-2 text-white border-white">
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="w-125 mt-16 lg:mt-0 flex flex-col justify-between gap-12 lg:gap-0">
          <p className="text-white text-[1.2rem] lg:text-[1.6rem]">
            Sign up for innovation news and <br /> design inspiration:
          </p>
          <div className="flex justify-between border-white border-b-2">
            <input
              type="text"
              className="py-3 outline-none text-gray-500 text-[1.2rem]"
              placeholder="Email Address..."
            />
            <img className="w-16" src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
