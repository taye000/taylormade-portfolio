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
  { skills: "Git" },
];
const Aboutsection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-12 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          All I can share about myself out here..
          <hr className="w6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"/>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:spce-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center font-bold text-2xl mb-6 md:text-left">
              Getting to know me!
            </h1>
            <p>
              I am passionate in programming and striving to make a difference.
            </p>
            <br />
            <p>
              I graduated from Kenya Methodist University with a Degree in
              Business Information Technology. I have since engaged in software
              engineering as a profession.
            </p>
            <br />
            <p>
              I am always looking for opportunities to learn and grow, as
              software engineering demands constant learning and growth.
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
              src={"/headshot.jpg"}
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
