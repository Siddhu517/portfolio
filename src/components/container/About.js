import React from "react";
import cv from "../assets/Siddhesh_Sadadekar_Resume.pdf";

const About = () => {
  const info = [{ text: "Completed Projects", count: "05" }];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My Introduction</p>
        <div
          className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-16xl0
        max-w-6xl mx-auto"
        >
          <div className="p-2 ">
            <div className="text-gary-300 my-3 w-11/12 mx-auto">
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I am a highly motivated individual with a strong passion for
                coding and a desire to learn and grow in the field of web
                development. I have a solid understanding of the basics of web
                development, including HTML, CSS, and JavaScript, and I have
                experience in creating simple websites and web pages, as well as
                understanding responsive design principles to make sure the
                website looks great on any device.
              </p>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I am also familiar with front-end frameworks such as React and
                AngularJS and I am currently learning how to build dynamic and
                interactive user interfaces, as well as how to manage the state
                of the application. I am a quick learner and I am always eager
                to expand my skill set and stay up-to-date with the latest web
                development technologies. I am willing to take on new challenges
                and I am confident in my abilities to deliver high-quality
                products.
              </p>
              <p className="text-justify leading-7 w-11/12 mx-auto">
                I possess a strong work ethic and am a team player, I am good at
                working with others and I am able to take constructive criticism
                to improve my skills. I am excited to start my career as a web
                developer and I am eager to work on projects that will allow me
                to continue to learn and grow as a developer.
              </p>

              <div className="flex mt-10 items-center gap-7  ">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="text-cyan-600">+</span>
                    </h3>
                    <span className="md:text-base text-xs ">
                      {content.text}
                    </span>
                  </div>
                ))}
              </div>
              <a href={cv} download>
                <button className="btn-primary mt-7">Download CV</button>
              </a>
            </div>
            <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
              <div
                className="lg:w-96 h-full relative sm:w-10/12 w-11/12
              max-w-sm aboutImg"
              >
                <img
                  src=""
                  alt=""
                  className="w-full object-cover bg-cyan-600 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
