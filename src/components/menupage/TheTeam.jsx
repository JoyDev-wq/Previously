import React, { useEffect, useState, useRef } from "react";
import gp from "../../assets/team/ph-1.jpg";
import img from "../../assets/team/col1-1.jpg";
import plus from "../../assets/team/plus.svg";
import team_1 from "../../assets/team/team-1.jpeg";
import team_2 from "../../assets/team/team-2.jpg";
import team_3 from "../../assets/team/team-3.webp";
import gsap from "gsap";
import Menu from "../../components/homepage/Menu.jsx";

import team1 from "../../team.js";
import { team2, team3, team4 } from "../../team.js";

const TheTeam = ({ menuOpen = { menuOpen } }) => {
  const [rotateColOne, setRotateColOne] = useState(false);
  const [rotateColTwo, setRotateColTwo] = useState(false);
  const [rotateColThree, setRotateColThree] = useState(false);
  const [rotateColFour, setRotateColFour] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [openIndex2, setOpenIndex2] = useState(null);
  const [openIndex3, setOpenIndex3] = useState(null);
  const [openIndex4, setOpenIndex4] = useState(null);

  const para = useRef();

  useEffect(() => {
    // window.scrollTo(0, 0);
    gsap.from(".hero", {
      y: 25,
      opacity: 0,
      duration: 0.6,
    });
  }, []);
  
  gsap.fromTo(".menu",
    {x:-800},{x:0,duration:0.3,ease:"power2.out"}
 )

  const showDetails1 = (index) => {
    setRotateColOne(!rotateColOne);
    setOpenIndex(openIndex === index ? null : index);
  };
  const showDetail2 = (index) => {
    setRotateColTwo(!rotateColTwo);
    setOpenIndex2(openIndex2 === index ? null : index);
  };
  const showDetails3 = (index) => {
    setRotateColThree(!rotateColThree);
    setOpenIndex3(openIndex3 === index ? null : index);
  };
  const showDetails4 = (index) => {
    setRotateColFour(!rotateColFour);
    setOpenIndex4(openIndex4 === index ? null : index);
  };

  return (
    <div className=" text-white bg-black">
      <div className="menu">
        <Menu menuOpen={menuOpen} />
      </div>

      <div className="hero px-12 py-5">
        <div className="text-center">
          <p className="uppercase">WHO WE are</p>
        </div>
        <div>
          {" "}
          <h1 style={{ fontFamily: "myfont" }}>The Team</h1>
        </div>
      </div>
      <div ref={para} className=" hero px-12">
        <img src={gp} alt="" className="" />
        <div className="my-[5rem] text-[48px] w-full py-12 ">
          <p
            className="text w-[67vw] ml-auto "
            style={{ fontFamily: "myfont" }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We
            are a team of experienced entrepreneurs, researchers, strategists
            and designers using a human centred design-led
            approach.&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
        </div>
      </div>

      <div className="hero mt-[10rem] px-2 flex gap-2 justify-around flex-wrap">
        <div className="w-110 flex flex-col gap-16">
          {team1.map((item, index) => (
            <div className="" key={index}>
              <div className=" object-cover mb-8">
                <img className="" src={item.img} alt="" />
              </div>
              <hr className="" />

              <div className="flex justify-between">
                <div>
                  <p className="text-2xl mb-0">{item.name}</p>
                  <p className="text-2xl">{item.post}</p>
                </div>
                <div className=" ">
                  <img
                    onClick={() => showDetails1(index)}
                    className={`width-[40px] height-[40px] transition-transform duration-300 ${
                      rotateColOne ? "rotate-45" : ""
                    }`}
                    src={plus}
                    alt=""
                  />
                </div>
              </div>
              {rotateColOne && openIndex === index && (
                <div className="py-4">
                  <p className="">{item.para}</p>
                  <div className="">
                    <p className="uppercase ml-32 tracking-widest">Contact</p>

                    <p className="border-b border-t border-white py-3 mb-0">
                      {item.link}
                    </p>

                    <p className="border-b border-white py-3 mb-0">
                      {item.linkedin}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="w-110 flex flex-col gap-16">
          {team2.map((item, index) => (
            <div className="" key={index}>
              <div className=" object-cover mb-8">
                <img className="" src={item.img} alt="" />
              </div>
              <hr className="" />

              <div className="flex justify-between">
                <div>
                  <p className="text-2xl mb-0">{item.name}</p>
                  <p className="text-2xl">{item.post}</p>
                </div>
                <div className=" ">
                  <img
                    onClick={() => showDetail2(index)}
                    className={`width-[40px] height-[40px] transition-transform duration-300 ${
                      rotateColTwo ? "rotate-45" : ""
                    }`}
                    src={plus}
                    alt=""
                  />
                </div>
              </div>
              {rotateColTwo && setOpenIndex2 === index && (
                <div className="py-4">
                  <p className="">{item.para}</p>
                  <div className="">
                    <p className="uppercase ml-32 tracking-widest">Contact</p>

                    <p className="border-b border-t border-white py-3 mb-0">
                      {item.link}
                    </p>

                    <p className="border-b border-white py-3 mb-0">
                      {item.linkedin}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="w-110 flex flex-col gap-16">
          {team3.map((item, index) => (
            <div className="" key={index}>
              <div className=" object-cover mb-8">
                <img className="" src={item.img} alt="" />
              </div>
              <hr className="" />

              <div className="flex justify-between">
                <div>
                  <p className="text-2xl mb-0">{item.name}</p>
                  <p className="text-2xl">{item.post}</p>
                </div>
                <div className=" ">
                  <img
                    onClick={() => showDetails3(index)}
                    className={`width-[40px] height-[40px] transition-transform duration-300 ${
                      rotateColThree ? "rotate-45" : ""
                    }`}
                    src={plus}
                    alt=""
                  />
                </div>
              </div>
              {rotateColThree && openIndex3 === index && (
                <div className="py-4">
                  <p className="">{item.para}</p>
                  <div className="mt-12">
                    <p className="uppercase ml-32 tracking-widest">Contact</p>

                    <p className="border-b border-t border-white py-3 mb-0">
                      {item.link}
                    </p>

                    <p className="border-b border-white py-3 mb-0">
                      {item.linkedin}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="w-110 flex flex-col gap-16">
          {team4.map((item, index) => (
            <div className="" key={index}>
              <div className=" object-cover mb-8">
                <img className="" src={item.img} alt="" />
              </div>
              <hr className="" />

              <div className="flex justify-between">
                <div>
                  <p className="text-2xl mb-0">{item.name}</p>
                  <p className="text-2xl">{item.post}</p>
                </div>
                <div className=" ">
                  <img
                    onClick={() => showDetails4(index)}
                    className={`width-[40px] height-[40px] transition-transform duration-300 ${
                      rotateColFour ? "rotate-45" : ""
                    }`}
                    src={plus}
                    alt=""
                  />
                </div>
              </div>
              {rotateColFour && openIndex4 === index && (
                <div className="py-4">
                  <p className="">{item.para}</p>
                  <div className="mt-12">
                    <p className="uppercase ml-32 tracking-widest">Contact</p>

                    <p className="border-b border-t border-white py-3 mb-0">
                      {item.link}
                    </p>

                    <p className="border-b border-white py-3 mb-0">
                      {item.linkedin}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="hero px-4 pt-[20rem]">
        <div className="py-8 border-t-2 border-white">
          <p className="uppercase tracing-widest text-center">Who WE Are</p>
          <h1 style={{ fontFamily: "myfont" }}>Our Studio</h1>
          <div className="my-[6rem] text-[48px] w-full py-12">
            <p className="w-[62vw] leading-12" style={{ fontFamily: "myfont" }}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our Ponsonby
              studio space was designed by the Previously team to enhance the
              wellbeing, mood & productivity of the people within it — using
              thoughtful lighting, planting, scent, sound and spatial
              design.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
          </div>
          <div>
            <div className="w-full lg:w-[70%] object-cover">
              <img className="" src={team_1} alt="" />
            </div>
            <div className="mt-8 ">
              <div className="flex justify-around xl:justify-between gap-2">
                <img
                  className="h-[50vh] md:h-[60vh] lg:h-[70vh] w-[50%] md:ml-4 lg:ml-12 lg:w-[35%] "
                  src={team_2}
                  alt=""
                />
                <img
                  className="w-[50%] md:h-[60vh] h-[50vh] lg:h-[80vh] xl:h-screen lg:w-[40%]"
                  src={team_3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero mt-[6rem] p-4 flex gap-12">
        <div className="uppercase tracking-widest">
          <div>
            <ul>
              <li>design</li>
              <li>Lighting</li>
              <li>Furniture</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Scenting</li>
              <li>Sound</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Rugs</li>
              <li>Plants</li>
              <li>Constructions</li>
            </ul>
          </div>
        </div>

        <div className="text-[14px]">
          <div>
            <ul>
              <li>Previously Unavailable</li>
              <li>Novii</li>
              <li>Harrows</li>
              <li>Imo</li>
              <li>Air Aroma</li>
              <li>Autex Acoustics & Sonos</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Nodi Rugs</li>
              <li>Your Garden</li>
              <li>Ze Build</li>
            </ul>
          </div>
        </div>

        <div className="mt-[1rem] text-[14px] cursor-pointer">
          <div>
            <ul>
              <li>novii.co.nz</li>
              <li>harrows.co.nz</li>
              <li>imo.co.nz</li>
              <li>air-aroma.com</li>
              <li>autexglobal.com/nz</li>
              <li>‍Sonos.com</li>
              <li>nodirugs.com</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>zebuild.co.nz</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheTeam;

