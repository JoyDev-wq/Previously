import React, { useEffect } from "react";
import facebook from "../../assets/page_one/facebook.svg";
import linkedin from "../../assets/page_one/linkedin.svg";
import link from "../../assets/page_one/share-link.svg";
import mail from "../../assets/page_one/share-mail.svg";
import twitter from "../../assets/page_one/twitter.svg";
import link_1 from "../../assets/page_one/link-01.png";
import video_1 from "../../assets/page_one/video-0.mp4";
import f1 from "../../assets/page_one/f1.jpg";
import f2 from "../../assets/page_one/f2.png";
import f3 from "../../assets/page_one/f3.png";
import f12 from "../../assets/page_one/f12.png";

import f4 from "../../assets/page_one/f4.png";
import f5 from "../../assets/page_one/f5.png";
import f6 from "../../assets/page_one/f6.png";
import f7 from "../../assets/page_one/f7.png";
import f8 from "../../assets/page_one/f8.png";
import f9 from "../../assets/page_one/f9.png";
import f11 from "../../assets/page_one/f11.jpg";

import f10 from "../../assets/page_one/f10.png";
import f13 from "../../assets/page_one/f13.jpg";

import Carousal from "../UIcomponents/Carousal_1";
import Carousal_2 from "../UIcomponents/Carousal_2";
import Menu from "../homepage/Menu";
import gsap from "gsap";

const PageOne = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    gsap.fromTo('.menu',
    {x:-800},
    {x:0, duration:1, ease:"power2.easeInOut"}
  )
  
  return (
    <div className="bg-black relative text-white">

      <div className="menu w-full absolute top-0 left-0 z-50" onClick={()=>console.log("Menu Clicked")}>
        <Menu menuOpen={menuOpen} />
      </div>

      <div className="flex justify-between p-10 ">
        <div className="flex flex-col text-white ">
          <p className="uppercase text-[14px] tracking-widest">case Study</p>
          <h1 className="w-[60vw] text-[34px]" style={{ fontFamily: "myfont" }}>
            Friends That Invest
          </h1>
        </div>
        <div>
          <p className="uppercase text-[14px] tracking-widest">
            Share this article{" "}
          </p>
          <div className="flex justify-end mt-4 gap-1">
            <a href="">
              <img src={link} alt="" />
            </a>
            <a href="">
              <img src={mail} alt="" />
            </a>
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={twitter} alt="" />
            </a>
            <a href="">
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full p-6">
        <div className="flex flex-col gap-6">
          <img src={link_1} alt="" />
          <video
            className="w-full"
            muted
            autoPlay
            loop
            playsInline
            src={video_1}
          ></video>
        </div>
      </div>

      <div className="w-full mt-40 mb-[5rem]">
        <h1
          className="text-[48px] text-center mx-auto w-[60%] lg:w-[48%] "
          style={{ fontFamily: "myfont" }}
        >
          Friends That Invest is normalising wealth building to help more people
          see themselves in money.
        </h1>
        <div
          className="flex flex-col justify-center gap-7 w-[50%] lg:w-[54%] mx-auto text-[22px] mt-[15rem]"
          style={{ fontFamily: "Acumin" }}
        >
          <p>
            We partnered with the team at Friends That Invest to define the next
            chapter of their brand—one that reflects the true scale of their
            impact and sets them up for future growth and ambitions.
          </p>
          <p>
            When founder Simran Kaur came to us, it was clear she was leading
            something far bigger than an investing masterclass, a best-selling
            book, or even her fiercely loyal global community. Friends That
            Invest is doing more than educating people about finance—they’re
            creating an entirely new path to access. By stripping out the jargon
            and making money talk feel easy, social, fun, and inclusive, they’re
            changing the way young women engage with investing and building
            wealth.
          </p>
          <p>
            At the core of Friends That Invest is the belief that wealth
            building can—and should—feel second nature to everyone. Our brand
            idea, ‘Fluent in finance’, is centred on this posture: a stance
            that’s confident and unapologetic, and makes investing feel as
            normal and intuitive as managing your daily life. It allowed us to
            retain the community charm and girly-pop vibe FTI is so well known
            for, while bringing a new maturity that reflects where the business
            is headed and anchoring future product growth with a clear centre of
            gravity.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col gap-16 p-6">
        <img className="rounded-xl" src={f1} alt="" />
        <img className="rounded-xl" src={f2} alt="" />
        <Carousal image1={f3} image2={f12} />
        {/* <img className="rounded-xl" src={f3} alt="" /> */}
      </div>

      <div
        className="mt-18  flex flex-col justify-center gap-7 w-[50%] mx-auto text-[22px]"
        style={{ fontFamily: "Acumin" }}
      >
        <p>
          The brand identity embraces femininity, being intelligent =
          simplicity, and the strength of community.
        </p>
        <p>
          Our graphic language is based on the daisy chain — a true
          representation of the Friends that Invest community of “Investie
          Besties” growing together and becoming financially fluent. Our ‘F’
          logo mark carries an unapologetically bold yet feminine aesthetic. The
          stylised compounded nature of the shape speaks to growth and momentum
          — we’re always facing forward with confidence and glowing up towards
          financial independence. This compounded effect extends across the
          identity, enabling confidence to come through in every touchpoint,
          from hero copy lines to iconography. The colour palette amplifies this
          energy with hues of pinks, purples, and yellows that balance
          ultra-femininity with sophistication, giving the brand both warmth and
          flexibility.
        </p>
        <p>
          What started as Simran sharing her investing journey to help others,
          has grown into a global movement — redefining how people relate to
          wealth and everything that comes with it. Evolving the brand meant
          keeping the original magic, while giving it the clarity and confidence
          to carry what’s next.
        </p>
      </div>

      <div className="w-full mt-20 p-6 flex flex-col gap-10 lg:gap-27">
        <img src={f4} alt="" />
        <div className="flex flex-col sm:flex-row justify-center gap-10 lg:gap-4 ">
          <img className="w-full sm:w-[49%]" src={f5} alt="" />
          <img className="w-full sm:w-[49%]" src={f6} alt="" />
        </div>

        <img src={f7} alt="" />
        <div className="flex flex-col sm:flex-row justify-center gap-10 lg:gap-4 ">
          <img className="w-full sm:w-[49%]" src={f8} alt="" />
          <img className="w-full sm:w-[49%]" src={f9} alt="" />
        </div>

        <div>
          <Carousal_2 image1={f10} image2={f13} />
        </div>

        <div>
          <img src={f11} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PageOne;
