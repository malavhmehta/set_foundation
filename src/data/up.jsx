import { GraduationCap, University } from "styled-icons/fa-solid";

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
  schedule: {
    rows: ["Time", "Speaker", "Topic"],
    columns: [
      ["1:30 pm - 1:35 pm", "	Intro to SET UP", "—"],
      ["1:35 pm - 1:55 pm", "Victor Wang", "Computer Science"],
      ["1:55 pm - 2:15 pm", "Wanda Song", "Software Engineering	"],
      ["2:15 pm - 2:35 pm", "Mingde Yin", "Engineering Science	"],
      ["2:35 pm - 2:55 pm", "Amar Jasarbasic", "Career opportunities in SE"],
      ["2:55 pm - 3:15 pm", "TBD", "Research, STEM advances"],
      ["3:15 pm - 3:35 pm", "Nuha Saharoui", "Computer Engineering"],
      ["3:35 pm - 3:55 pm", "William Wang", "Dev Degree Program"],
      ["3:55 pm - 4:00 pm", "Closing Remarks", "—"],
    ],
  },
};
