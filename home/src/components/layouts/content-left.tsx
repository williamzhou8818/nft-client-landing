import React from "react";
import Main from "./main";
import Nav from "./nav";

const Header = () =>  (
    <div className="max-w-7xl mx-auto">
    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <Nav />
      <Main />
    </div>
  </div>
);

export default Header;