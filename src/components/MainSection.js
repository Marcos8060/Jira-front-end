import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";

const MainSection = () => {
  return (
    <section className="flex bg-primary h-[90vh]">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12">
        <Main />
      </div>
    </section>
  );
};

export default MainSection;
