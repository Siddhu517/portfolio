import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

import socialcircle from "../assets/images/socialMedia.jpg";
import keepNotes from "../assets/images/keepNotes.jpg";
import TodoList from "../assets/images/todoList.jpg";
import chat_AI from "../assets/images/chat_ai.jpg";
import portfolio from "../assets/images/portfolio.jpg";

const Projects = () => {
  const projects = [
    {
      img: socialcircle,
      name: "SocialCircle",
      github_link: "https://github.com/Siddhu517/SocialCircle_Web_App",
      live_link: "https://socialcircle.onrender.com",
    },
    {
      img: keepNotes,
      name: "KeepNotes",
      github_link: "https://github.com/Siddhu517/KeepNotes",
      live_link: "https://keepnotes-pjtz.onrender.com",
    },
    {
      img: TodoList,
      name: "TodoList",
      github_link: "https://github.com/Siddhu517/Todo_List",
      live_link: "https://todoslist.onrender.com",
    },
    {
      img: chat_AI,
      name: "chat_AI",
      github_link: "https://github.com/Siddhu517/AI_CHAT",
      live_link: "https://chat-ai-e6ea.onrender.com",
    },
    {
      img: portfolio,
      name: "Portfolio-Website",
      github_link: "https://github.com/Siddhu517/portfolio",
      live_link: "https://portfolio-siddhesh-sadadekar.onrender.com/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center mt-20">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gary-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex justify-center items-center ">
        <div className="lg:w-2/1 p-20 w-full">
          <Swiper
            slidesPreview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects?.map((project, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img className="rounded-lg" src={project.img} alt="" />
                  <h3 className="text-xl my-4">{project.name}</h3>
                  <div className="flex gap-3" role="button">
                    <a
                      onClick={() => window.open(project.github_link, "_blank")}
                      href="#"
                      role="button"
                      className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href="#"
                      onClick={() => window.open(project.live_link, "_blank")}
                      role="button"
                      className="text-cyan-600  bg-gray-800 px-2 py-1 inline-block "
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/*  <div className="lg:block hidden">
          <img src="" className="" alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
