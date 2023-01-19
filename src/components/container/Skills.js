import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaReact,
  FaNode,
  FaDatabase,
  FaGithub,
  FaAws,
} from "react-icons/fa";

const Skills = () => {
  const skills = [
    {
      logo: FaHtml5,
      name: "HTML",
      count: 86,
    },
    {
      logo: FaCss3,
      name: "CSS",
      count: 86,
    },
    {
      logo: FaBootstrap,
      name: "Bootstrap",
      count: 86,
    },
    {
      logo: FaReact,
      name: "ReactJS",
      count: 80,
    },
    {
      logo: FaNode,
      name: "NodeJS",
      count: 75,
    },
    {
      logo: FaDatabase,
      name: "MongoDB",
      count: 70,
    },
    {
      logo: FaGithub,
      name: "Github",
      count: 60,
    },
    {
      logo: FaAws,
      name: "AWS",
      count: 30,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gary-800 relative">
      <div className="mt-8 text-gary-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg ">My Knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap ">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative main-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%, #ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full "
              >
                <div
                  className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center
                group-hover:text-cyan-600"
                >
                  {/* <ion-icon name={skill.logo}></ion-icon> */}
                  <skill.logo />
                </div>
              </div>
              <p className="text-xl mt-4">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
