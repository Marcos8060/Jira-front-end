import React, { useEffect, useState } from "react";

const summary = [
  {
    title: "O done",
    duration: "in the last 7 days",
  },
  {
    title: "O done",
    duration: "in the last 7 days",
  },
  {
    title: "O done",
    duration: "in the last 7 days",
  },
];

const Summary = () => {
  const [currentUser,setCurrentUser] = useState(null);


  useEffect(() => {
    // retrieve user json string from local storage
    const jsonString = localStorage.getItem("userDetails");
    const activeUser = JSON.parse(jsonString);
    setCurrentUser(activeUser)

  }, []);

  return (
    <>
      <section>
        <div className="text-center space-y-2">
          <h1 className="text-2xl">
            Good afternoon {currentUser?.username}
          </h1>
          <p className="text-sm">
            Here's where you'll view a summary of Jira Clone's status,
            priorities, workload, and more.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 my-4">
          {summary.map((summary, index) => (
            <div
              key={index}
              className="bg-white rounded shadow-xl p-4 text-center h-28 flex items-center justify-center"
            >
              <h1>
                <span className="text-rblue font-semibold text-xl">
                  {summary.title}
                </span>
                <br />
                {summary.duration}
              </h1>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Summary;
