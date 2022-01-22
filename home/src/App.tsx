import React from "react";
import ReactDOM from "react-dom";

/**components layouts*/
import ContentLeft from "./components/layouts/content-left";
import ContentRight from "./components/layouts/content-right";
import Footer from "./components/layouts/footer";

/**styles */
import "./index.scss";

const App = () => (
  <div className="relative bg-white overflow-hidden"> 
      <ContentLeft />
      <ContentRight />
      <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
