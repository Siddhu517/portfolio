import React from "react";
import userImg from "../assets/images/siddhu.png";
const Hero = () => {
  const social_media = [
    "logo-instagram",
    "logo-facebook",
    "logo-linkedin",
    "logo-twitter",
  ];
  return (
    <section
      id="home"
      className="min-h-screen  flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center ">
        <img src={userImg} alt="" className="object-cover" />
      </div>
      <div className="flex-1 mt-5">
        <div className="md:text-left text-center">
          <h1
            className="md:text-5xl text-2xl md:leading-normal leading-10
          text-white font-bold "
          >
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Siddhesh Sadadekar</span>
          </h1>
          <h4
            className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold 
           text-gray-600 "
          >
            Fullstack Developer
          </h4>
          <a href="#contact">
            {" "}
            <button className="btn-primary mt-8">Contact Me</button>
          </a>
          <div
            className="mt-8 text-3xl flex items-center md:justify-start justify-center
            gap-5 "
          >
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600  hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
