import React, { useState } from "react";
import { SiJirasoftware } from "react-icons/si";

const tabItems = [
  { name: "Summary" },
  { name: "Board" },
  { name: "List" },
  { name: "Calender" },
  { name: "Timeline" },
  { name: "Forms" },
  { name: "Pages" },
  { name: "Project Settings" },
];

const Main = () => {
  const [activeTab, setActiveTab] = useState(tabItems[0].name);

  return (
    <>
      <section className="p-4 space-y-4">
        <div className="flex items-center gap-4">
          <SiJirasoftware className="bg-yellow rounded p-2 text-4xl" />
          <h1 className="font-semibold text-bluish text-xl">Jira Clone</h1>
        </div>

        <section className="flex items-center gap-8 border-b-2 border-blue">
          {tabItems.map((tab, index) => (
            <div onClick={()=> setActiveTab(tab.name)} className={tab.name === activeTab ? 'border-b-2 border-bluish' : '' }>
              <p key={index} className="text-sm my-2 cursor-pointer text-bluish font-semibold">{tab.name}</p>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default Main;
