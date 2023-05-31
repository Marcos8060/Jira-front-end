import React from "react";

const Summary = () => {
  return (
    <>
      <section>
        <div className="text-center space-y-2">
          <h1 className="font-semibold text-2xl">Good afternoon Marcos Ochieng</h1>
          <p className="text-sm">
            Here's where you'll view a summary of Jira Clone's status,
            priorities, workload, and more.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 my-4">
          <div className="bg-white rounded p-4 text-center h-28 flex items-center justify-center">
            <h1>O done <br /> in the last 7 days</h1>
          </div>
          <div className="bg-white rounded p-4 text-center h-28 flex items-center justify-center">
            <h1><span className="text-rblue font-semibold text-xl">1 Created </span> <br />in the last 7 days</h1>
          </div>
          <div className="bg-white rounded p-4 text-center h-28 flex items-center justify-center">
            <h1>O due <br /> in the last 7 days</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Summary;
