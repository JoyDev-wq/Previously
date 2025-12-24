import "./AboutUs.css";
import Menu from "./Menu";

const AboutUs = ({ menuOpen }) => {
  return (
    <div className="relative py-8 bg-black text-white w-full flex flex-col justify-center items-center text-center">
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
        <div className="mt-20 w-[9rem] mx-auto border border-white rounded-full hover:bg-white hover:text-black hover:font-semibold"  style={{ transition: "0.3s ease-in-out" }}>
          <button
            className=" py-1 px-4 rounded-full text-[20px] cursor-pointer"
           
          >
            What we do
          </button>
        </div>
      </div>

      {/* Menu */}
      <div className="w-full absolute top-0 left-0 z-10">
        <Menu menuOpen={menuOpen} />
      </div>
    </div>
  );
};

export default AboutUs;
