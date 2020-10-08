import { GraduationCap, University } from "styled-icons/fa-solid";

import Amar from "../assets/images/amar.jpg";
import Anthony from "../assets/images/anthony.png";
import Mingde from "../assets/images/mingde.jpg";
import ProfBishop from "../assets/images/prof_bishop.jpg";
import Victor from "../assets/images/victor.jpg";
import Wanda from "../assets/images/wanda.jpg";
import William from "../assets/images/william.png";

export const up = {
  hero: {
    title: {
      base: "A virtual university ",
      extensions: ["panel.", 1600, "showcase.", 1600],
    },
    lead:
      "Our first ever virtual university showcase, SET UP, featuring undergraduates and professors from engineering and technology programs across Canada! ",
  },
  about: {
    title: "What is SET UP all about?",
    content:
      "SET Ottawa is hosting its first ever virtual university panel, SET UP, featuring undergraduates and professors from engineering and technology programs across Canada!",
    link: {
      href: "/register",
      caption: "Register now",
    },
    cards: [
      {
        icon: University,
        title:
          "Learn about engineering and technology programs from top universities.",
        content:
          "Hear from professors and students involved in programs at UWaterloo, UofT, UOttawa, CarletonU (w/ Shopify DevDegree) and many more!",
      },
      {
        icon: GraduationCap,
        title: "Talk to and learn from current students.",
        content:
          "At SET UP, you'll learn about the engineering and technology programs you're interested in directly from current students!",
      },
    ],
  },
  countdown: {
    location: {
      caption: "twitch.tv/setottawa",
      href: "https://www.twitch.tv/setottawa",
    },
    time: "Oct 10, 2020 1:30 PM",
  },
  speakers: [
    {
      name: "William Bishop",
      image: ProfBishop,
      title: "Director of Admissions, Faculty of Engineering",
      university: "University of Waterloo",
      description:
        "Dr. William Bishop holds a doctorate degree in Electrical and Computer Engineering from the University of Waterloo and is the Director of Admissions for Waterloo's Faculty of Engineering. During our panel, he will be speaking about ways to stand out during undergraduate admissions, the general field of engineering, potential career paths, opportunities on campus, and more!",
    },
    {
      name: "Mingde Yin",
      image: Mingde,
      title: "Second Year Student Engineering Science",
      university: "University of Toronto",
      description:
        "Mingde Yin is a student studying Engineering Science at the University of Toronto. His main interests are in aerospace, with hopes of developing technology to send humans to Mars and beyond. We're excited to hear from you!",
    },
    {
      name: "Wanda Song",
      image: Wanda,
      title: "Secondary Year Student Software Engineering",
      university: "University of Waterloo",
      description:
        "Wanda Song is a student in Software Engineering at the University of Waterloo. She takes interest in competitive programming, backend development and embedded systems. Furthermore, Wanda loves to play Among Us, drink tea, pet cats, read, and take long walks in the forest.",
    },
    {
      name: "Anthony Luo",
      image: Anthony,
      title: "Secondary Year Student Computer Engineering",
      university: "University of Waterloo",
      description:
        "Anthony Luo is a student in Computer Engineering at the University of Waterloo! He is interested in hardware development and design as well as sensors and control systems. Some of his hobbies and personal projects includes robotics, image/object detection algorithms, and table tennis.",
    },
    {
      name: "Amar Jasarbasic",
      image: Amar,
      title: "B.ASc Graduate Software Engineering",
      university: "University of Ottawa",
      description:
        "Amar Jasarbasic is a student in Software Engineering and Engineering Management at the University of Ottawa. He enjoys coding and has interned at numerous big companies such as Shopify, Microsoft, and Amazon! Not only is Amar an avid programmer, but he also loves playing water polo and scuba diving.",
    },
    {
      name: "William Wang",
      image: William,
      title: "Second Year Student CS Dev Degree",
      university: "Carleton University",
      description:
        "William Wang is a student at Carleton University in the Computer Science Dev Degree program! He enjoys participating in hackathons, LeetCode contests, and competitive math contests! Additionally, William is a guitarist/singer, an ultramarathoner, and a previous tornadoes researcher at Western University.",
    },
    {
      name: "Victor Wang",
      image: Victor,
      title: "Second Year Student Computer Science",
      university: "University of Waterloo",
      description:
        "Victor Wang is a student studying Computer Science at the University of Waterloo. He is passionate about robotics and loves to deepen his knowledge in machine learning and AI as well as programming language design from interpreters to compilers.",
    },
  ],
  schedule: {
    rows: ["Time", "Speaker", "Topic"],
    columns: [
      ["1:30 - 1:35 pm", "	Intro to SET UP", "—"],
      ["1:35 - 1:55 pm", "Mingde Yin", "Engineering Science"],
      ["1:55 - 2:15 pm", "Wanda Song", "Software Engineering	"],
      ["2:15 - 2:35 pm", "Anthony Luo", "Dev Degree Program"],
      ["2:35 - 2:55 pm", "Amar Jasarbasic", "Career opportunities in SE"],
      [
        "2:55 - 3:15 pm",
        "Professor William Bishop",
        "Faculty of Engineering at Waterloo",
      ],
      ["3:15 - 3:35 pm", "William Wang", "Computer Engineering"],
      ["3:35 - 3:55 pm", "Victor Wang", "Computer Science"],
      ["3:55 - 4:00 pm", "Closing Remarks", "—"],
    ],
  },
};
