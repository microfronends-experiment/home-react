import React from "react";
import ReactBanner from "../components/ReactBanner";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div>
      <ReactBanner name="/reactPage2" />
      <Cards count={2} />
      <Link to="/angularPage1">
        <button>/angularPage1</button>
      </Link>
      <Link to="/">
        <button>HomePage</button>
      </Link>
    </div>
  );
};

export default Page2;
