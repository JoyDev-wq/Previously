import React, { useEffect } from "react";
import facebook from "../../assets/page_one/facebook.svg";
import linkedin from "../../assets/page_one/linkedin.svg";
import link from "../../assets/page_one/share-link.svg";
import mail from "../../assets/page_one/share-mail.svg";
import twitter from "../../assets/page_one/twitter.svg";
import video from "../../assets/page_two/video.mp4";
import f1 from "../../assets/page_two/pg-f1.jpg";
import video01 from "../../assets/page_two/video01.mp4";
import Menu from "../homepage/Menu";
import gsap from "gsap";

const PageTwo = ({ menuOpen, setMenuOpen }) => {
  
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  gsap.fromTo('.menu',
    {x:-800},
    {x:0, duration:1, ease:"power2.easeInOut"}
  )

  return (
    <div className="bg-black relative text-white p-10">

      <div className="menu w-full absolute top-0 left-0 z-10" onClick={()=>console.log("Menu Clicked")}>
        <Menu menuOpen={menuOpen} />
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col text-white ">
          <h1 className="w-[60vw] text-[34px]" style={{ fontFamily: "myfont" }}>
            Nibbish
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

      <div className="mt-18">
        <video autoPlay loop muted src={video}></video>
      </div>

      <div className=" text-center my-48">
        <h1 style={{ fontFamily: "myfont" }}>
          Transforming snacking with nourishment.
        </h1>
      </div>

      <div>
        <img src={f1} alt="" />
      </div>

      <div
        className="flex flex-col gap-6 mt-24 mx-auto w-[56%] text-[22px]"
        style={{ fontFamily: "Acumin" }}
      >
        <p>
          Nibblish began as a humble kitchen operation in Hawke’s Bay. The
          simple goal was to make fruit snacks that were genuinely good for you
          and tasted great. Now sold across New Zealand and Australia, it’s
          loved by loyal repeat customers and known for its 100% fruit snacks
          that are healthy, tasty, and convenient.
        </p>
        <p>
          When Nibblish came to us they’d done a lot right, but the next stage
          of growth meant they needed to turn a great product into a great
          brand.
        </p>
        <div>
          <p className="font-bold mb-0">The Challenge</p>
          <p>
            ‍The Challenge ‍Nibblish already had a best-in-class product - 100%
            fruit, ethically sourced, gently baked, and delicious. But the
            healthy snacking category was stuck in a paradox:{" "}
            <i>good-for-you</i> often didn’t feel <i>good</i>. Semi health
            conscious consumers can equate health with taste compromise, and
            while Nibblish outperform on every rational measure, it lacked the
            emotional magnetism to match. We needed to transform Nibblish from a
            better choice, into a brand that truly feels as good as it is.
          </p>
        </div>

        <div>
          <p className="font-bold mb-0">Strategy</p>
          <p>
            By reframing the rational idea of the healthy snack to the emotional
            desire of nourishment, we created a mindset shift from
            self-restraint to vitality. We built the brand around the idea of
            fuelling the body and mind through small, intentional choices to
            build a fuller sense of wellbeing.
          </p>
        </div>
        <p>
          Our core idea, “Nourish your life” is a platform that celebrates the
          joy in doing something good for yourself, that feels good too. It
          encapsulates a mission to transform snacking with nourishment, both at
          a consumer level and as a business committed to making better choices
          across its entire ecosystem, from fruit source to community impact.
        </p>
      </div>

      <div className="w-full my-30">
        <video autoPlay loop muted className="w-full" src={video01}></video>
      </div>

      <div className="flex flex-col gap-6 mt-24 mx-auto w-[56%] text-[22px]">
        <div>
          <p className="font-bold mb-0">The Identity</p>
          <p>
            The Nibblish identity captures a sense of nourishment and empowered
            choice, reflecting the brand’s evolution from a kids’ favourite to
            one that also appeals to adults. The mark is bold, punchy, and
            delicious, rooted in the food and snack world. The subtle detailing
            in the letterforms gives it a bouncy, squishy quality, evoking
            something irresistibly nourishing. The core palette combines natural
            warmth with vibrant energy, drawing on the richness of the fruit
            ingredients to feels both fresh and wholesome.
          </p>
        </div>
        <div>
          <p className="font-bold mb-0">‍Campaign</p>
          <p>
            The “Nourish the Now” campaign brings the brand idea to life in a
            way that feels both playful and human. Shot from inside the Nibblish
            pack, the campaign captures the unfiltered moments where life
            happens, from kids’ birthday parties to quiet couch nights, a joyful
            reminder that wherever life happens, you can nourish it.
          </p>
        </div>
        <div>
          <p className="font-bold mb-0">A Brand Ready to Stretch</p>
          <p>
            By reframing Nibblish around nourishment as a mindset, we gave the
            brand emotional depth beyond ingredients and process.”Nourish your
            life” captures a simple truth, doing something good for yourself
            should feel good too and inspiring people to live with more
            vitality, optimism, and intent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
