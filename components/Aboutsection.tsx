import React from "react";
import Image from "next/image";

const skills = [
  { skills: "Node" },
  { skills: "Typescript" },
  { skills: "JavaScript" },
  { skills: "Solidity" },
  { skills: "Go" },
  { skills: "Python" },
  { skills: "Next" },
  { skills: "React" },
  { skills: "Docker" },
  { skills: "GraphQL" },
  { skills: "MongoDB" },
  { skills: "Prisma" },
  { skills: "PostgresQL" },
  { skills: "Git" },
];
const Aboutsection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-12 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          All I can share about myself out here..
          <hr className="w6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:spce-x-10 mr-1">
          <div className="md:w-1/2">
            <h1 className="text-center font-bold text-2xl mb-6 md:text-left">
              A Glimpse into My Journey
            </h1>
            <p>
              I am a dedicated software engineer with over 4 years of hands-on experience in building robust, scalable, and efficient applications. My passion for technology drives me to continually innovate and contribute to impactful projects.
            </p>
            <br />
            <p>
              I graduated from Kenya Methodist University with a degree in Business Information Technology. Since then, I have immersed myself in the world of software engineering, honing my skills in Node.js, Next.js, MongoDB, Docker, Git, and TypeScript.
            </p>
            <br />
            <p>
              Throughout my career, I've had the privilege to work on diverse projects, ranging from full-stack web development to cloud-based solutions. I am committed to delivering high-quality code, ensuring seamless user experiences, and staying ahead of industry trends.
            </p>
            <br />
            <p>
              I believe in continuous learning and adaptability, as the tech industry demands it. I am always eager to embrace new challenges, collaborate with like-minded professionals, and contribute to projects that make a difference.
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center font-bold text-2xl mb-6 md:text-left">
              Some Skills I brag about
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start md:pb-6">
              {skills.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skills}
                  </p>
                );
              })}
            </div>
            <Image
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
              src={"/hero-image.png"}
              width={300}
              height={300}
              alt={"Skills"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;
