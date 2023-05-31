import React from "react";
import { RxDashboard } from "react-icons/rx";

const Topbar = () => {
  return (
    <>
      <section className="bg-white flex items-center justify-between px-4 py-4 h-[10vh]">
        <div className="flex items-center gap-4">
          <RxDashboard />
          <h1 className="text-xl font-semibold">Jira Work Management</h1>
        </div>
        <div className="flex items-center gap-4">
          <button>Create</button>
          <input className="border border-bluish p-2 rounded focus:outline-none" type="text" placeholder="Search" />
        </div>
      </section>
    </>
  );
};

export default Topbar;
