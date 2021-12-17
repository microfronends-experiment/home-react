import React from "react";
import Cards from "../components/Cards";
import ReactBanner from "../components/ReactBanner";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <ReactBanner name="/" />
      <Cards count="3" />
      <Link to="/angularPage1">
        <button>/angularPage1</button>
      </Link>
      <Link to="/reactPage2">
        <button>/reactPage2</button>
      </Link>
    </div>
  );
};

export default Home;
