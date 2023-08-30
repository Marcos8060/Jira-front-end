import React, { useEffect, useState,useContext } from "react";
import { userContext } from "@/AuthContext";

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
  const { user } = useContext(userContext);


  return (
    <>
      <section>
        <article className="text-center space-y-2">
          <h1 className="text-2xl">
            Good afternoon {user?.username}
          </h1>
          <p className="text-sm">
            Here's where you'll view a summary of Jira Clone's status,
            priorities, workload, and more.
          </p>
        </article>
        <section className="grid grid-cols-3 gap-4 my-4">
          {summary.map((summary, index) => (
            <article
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
            </article>
          ))}
        </section>
      </section>
    </>
  );
};

export default Summary;
