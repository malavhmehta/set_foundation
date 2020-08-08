import { Campaign } from "styled-icons/material-outlined";
import { Code, HelpCircle } from "styled-icons/feather";

export const foundation = {
  hero: {
    expanded: "Students in Engineering and Technology",
    title: "SET.Foundation",
    lead:
      "The SET Foundation creates opportunities for students aspiring to achieve within the STEM fields.",
  },
  initiatives: {
    title:
      "Our vision is to enhance the quality of high school STEM education.",
    description:
      "The SET Foundation is an organization geared towards the enrichment and education of students aspiring to achieve within the STEM fields. We are carrying out this mission through our various initiatives:",
    list: [
      {
        icon: Campaign,
        title: "Conference",
        href: "/conference",
        description:
          "A one-day conference geared towards high school students who are considering or interested in pursuing engineering and technology.",
      },
      {
        icon: Code,
        title: "Hackathon",
        href: "/hackathon",
        description:
          "SET.Hacks() is a fully-online, people-focused, 24-hour hackathon that brings people together to solve the world's biggest problems.",
      },
      {
        icon: HelpCircle,
        title: "SET Up",
        href: "/up",
        description:
          "A brand new initiative that’s coming soon. Check back later to learn more.",
      },
    ],
  },
};
