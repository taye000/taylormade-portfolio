import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./SlideUp";

const projects = [
  {
    name: "cryptochama",
    description: "Crypto Chama is a decentralized savings and investment platform on the blockchain. It allows users and groups (chamas) to save in various cryptocurrencies, participate in communal saving schemes, and earn interest on their savings through integration with DeFi platforms.",
    image: "/cryptochama.png",
    github: "https://github.com/taye000/cryptochama",
    link: "https://cryptochama.vercel.app/",
  },
  {
    name: "Imani Escrow Service",
    description: "An Escrow service built with Nextjs and Node with typescript",
    image: "/imaniesc.png",
    github: "https://github.com/taye000/nextapp",
    link: "",
  },
  {
    name: "Lorentzian",
    description:
      "A Bot to execute trades from signals received from Lorentzian Classification indicator from trading view to Bybit and post updates to telegram.",
    image: "/lorentzian.png",
    github: "https://github.com/taye000/Lorentzian",
    link: "",
  },
  {
    name: "Arbitrage-Bot-on-BSC",
    description:
      "An Arbitrage-Bot-on-BSC built on Binance Smart Chain using Solidity",
    image: "/arbitrage.png",
    github: "https://github.com/taye000/Arbitrage-Bot-on-BSC",
    link: "",
  },
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
