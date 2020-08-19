import Password from "../assets/images/1password.png";
import Balsamiq from "../assets/images/balsamiq.png";
import Carleton from "../assets/images/carleton.png";
import Huawei from "../assets/images/huawei.png";
import Repl from "../assets/images/repl.png";
import Rogers from "../assets/images/rogers.png";
import UOttawa from "../assets/images/uottawa.jpg";
import Wolfram from "../assets/images/wolfram.png";

import { Users, Briefcase, Clock } from "styled-icons/fa-solid";

export const conference = {
  hero: {
    title: {
      base: "A conference for future ",
      extensions: ["engineers.", 1600, "innovators.", 1600],
    },
    lead:
      "Join like-minded high school students interested in pursuing a career in engineering and technology at SET 2020.",
  },
  sponsors: [
    {
      image: Password,
      name: "1Password",
      href: "https://1password.com/",
    },
    {
      image: Balsamiq,
      name: "Balsamiq",
      href: "https://balsamiq.com/",
    },
    {
      image: Carleton,
      name: "Carleton University",
      href: "https://carleton.ca/",
    },
    {
      image: Huawei,
      name: "Huawei",
      href: "https://www.huawei.com/ca/",
    },
    {
      image: Repl,
      name: "Repl.it",
      href: "https://repl.it/",
    },
    {
      image: Rogers,
      name: "Rogers",
      href: "https://www.rogers.com/home",
    },
    {
      image: UOttawa,
      name: "UOttawa",
      href: "https://www.uottawa.ca/en",
    },
    {
      image: Wolfram,
      name: "Wolfram Alpha",
      href: "https://www.wolframalpha.com/",
    },
  ],
  about: {
    title: "What is the SET tech conference all about?",
    content:
      "Students will have the opportunity to glimpse into engineering, through engaging in networking and experiencing hands-on workshops and activities.",
    link: {
      href: "/conference#past",
      caption: "View past conferences",
    },
    cards: [
      {
        icon: Users,
        title: "For high school students, by high school students.",
        content:
          "We are a non-profit, student-run organisation founded by a group of high school students from Ottawa, Ontario.",
      },
      {
        icon: Briefcase,
        title: "Exposure to careers in engineering and technology.",
        content:
          "Our conference will give students a broader perspective in choosing their career path, and allow them to make an informed choice.",
      },
      {
        icon: Clock,
        title: "High school students live in a digital generation.",
        content:
          "The world is changing at a faster rate than ever before, and we want to inspire the next generation of engineers to follow their dreams, and to continue this trend.",
      },
    ],
  },
  countdown: {
    location: {
      caption: "TBD",
      href: "",
    },
    time: new Date(),
  },
};
