"use client";
import React, { useEffect,useContext } from "react";
import { GrAdd } from "react-icons/gr";
import Link from "next/link";
import { getAllProjects } from "@/redux/features/projects";
import { useSelector, useDispatch } from "react-redux";
import { userContext } from "@/AuthContext";

const Sidebar = () => {
  const { projects } = useSelector(({ project }) => project);
  const { user } = useContext(userContext)
  const dispatch = useDispatch();
  console.log("FINALLY ", projects);
  console.log("USE_AUTH ", user);

  const fetchProjects = async () => {
    try {
      await dispatch(getAllProjects());
    } catch (error) {
      console.log("ERROR FETCHING PROJECTS ",error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <section className="p-4 space-y-4 border-r-2 border-blue h-[90vh]">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Projects</h1>
          <GrAdd className="bg-blue p-3 text-4xl rounded-full cursor-pointer" />
        </div>
        <div>
          <h2 className="uppercase text-sm">Recent</h2>
        </div>
        <div>
          <Link href="/projects">
            <h2 className="text-sm hover:bg-blue transition duration-300 ease-in-out p-2 rounded cursor-pointer">
              View All Projects
            </h2>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
