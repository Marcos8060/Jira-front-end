import React from "react";
import { GrAdd } from "react-icons/gr";


const Board = () => {
  return (
    <section className="flex gap-4">
      <div className="bg-gray rounded w-3/12 space-y-4">
        <div className="p-4">
        <p className="text-xs bg-blue rounded font-bold p-1 w-4/12 mb-4">TO DO <span className="font-semibold">0</span></p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer hover:bg-blue p-2">
          <GrAdd className="cursor-pointer" />
          <p className="text-sm">Create</p>
        </div>
      </div>
      <div className="bg-gray rounded p-4 w-3/12">
      <p className="text-xs bg-blue font-bold text-rblue w-5/12 rounded p-1 uppercase mb-4">in progress <span className="font-semibold">0</span></p>
      </div>
      <div className="bg-gray rounded p-4 w-3/12">
      <p className="text-xs bg-blue font-bold text-green w-3/12 rounded p-1 uppercase mb-4">done <span className="font-semibold">0</span></p>
      </div>
    </section>
  );
};

export default Board;
