import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./SlideUp";

const projects = [
  {
    name: "Arbitrage-Bot-on-BSC",
    description:
      "An Arbitrage-Bot-on-BSC built on Binance Smart Chain using Solidity",
    image: "/arbitrage.png",
    github: "https://github.com/taye000/Arbitrage-Bot-on-BSC",
    link: "",
  },
  {
    name: "asset-catalog-lookup",
    description:
      "Look up crypto assets of any wallet or contract address using covalent API service",
    image: "/assetlookup.png",
    github: "https://github.com/taye000/asset-catalog-lookup",
    link: "",
  },
  {
    name: "pushpay",
    description:
      "pushpay backend using solidy, Node with typescript and hardhat",
    image: "/pushpay.png",
    github: "https://github.com/taye000/pushpay-backend",
    link: "https://pushpay-zeta.vercel.app/",
  },
  {
    name: "Task Manager",
    description: "Task-manager backend api built with Golang",
    image: "/taskmanager.png",
    github: "https://github.com/taye000/task-manager-backend-Golang",
    link: "",
  },
  {
    name: "Imani Escrow Service",
    description: "An Escrow service built with Nextjs and Node with typescript",
    image: "/imani.png",
    github: "https://github.com/taye000/nextapp",
    link: "",
  }
];
const Projectsection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded" />
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <SlideUp offset="300px 0px -300px 0px">
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className="mt-8 md:w-1/2">
                  <Link href={project.link} target="_blank">
                  <Image
                    src={project.image}
                    alt="project"
                    width={500}
                    height={500}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
                  </Link>
                </div>
                <div className="mt-12 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project?.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub size={30} className="hover:-translate-y-1 transition-transform cursor-pointer" />
                    </Link>
                    <Link href={project.link} target="_blank">
                    <BsArrowUpRightSquare size={30} className="hover:-translate-y-1 transition-transform cursor-pointer" />

                    </Link>
                  </div>
                </div>
              </div>
            </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projectsection;
