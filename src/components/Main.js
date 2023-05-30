import React,{ useState} from "react";
import { SiJirasoftware } from "react-icons/si";

const tabItems = [
    { name: 'Summary'},
    { name: 'Board'},
    { name: 'List'},
    { name: 'Calender'},
    { name: 'Timeline'},
    { name: 'Forms'},
    { name: 'Pages'},
    { name: 'Project Settings'},
]

const Main = () => {
    const [currentTab,setCurrentTab] = useState(0)

  return (
    <>
      <section className="p-4">
        <div className="flex items-center gap-4">
          <SiJirasoftware className="bg-yellow rounded p-2 text-4xl"/>
          <h1 className="font-semibold text-xl">Jira Clone</h1>
        </div>
      </section>
    </>
  );
};

export default Main;
