import React, { useEffect } from "react";
import AboutUs from "./homepage/AboutUs";
import Links from "./homepage/Links";
import World from "./homepage/World";

const HomePage = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutUs menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Links />
      <World />
    </div>
  );
};

export default HomePage;
