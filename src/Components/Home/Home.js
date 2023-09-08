import React from "react";
import Header from "../Header/Header";
import CreateTask from "../CreateTask/CreateTask";
import DisplayTask from "../DisplayTask/DisplayTask";

const Home = () => {
  return (
    <div>
      <Header />
      <CreateTask />
      <DisplayTask />
    </div>
  );
};

export default Home;
