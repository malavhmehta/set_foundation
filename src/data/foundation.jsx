import { Code, HelpCircle, Speaker } from "styled-icons/feather";
import Section1 from "../assets/images/foundation_section_1.jpg";
import Section2 from "../assets/images/foundation_section_2.jpg";

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
        icon: Speaker,
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
  sections: [
    {
      image: {
        src: Section1,
        alt: "SET Competition (2018)",
      },
      text: {
        title: "SET’s mission was inspired by the needs of today’s youth.",
        content:
          "The world is changing at a faster rate than ever before, and we want to inspire the next generation of engineers to follow their dreams, and to continue this trend.",
        link: {
          href: "/#initiatives",
          caption: "Learn more",
        },
      },
    },
    {
      image: {
        src: Section2,
        alt: "Our team (2018)",
      },
      text: {
        title: "Meet the student team that runs the SET Foundation.",
        content:
          "What started as a small team back in 2018 quickly grew into a larger team to support the growing number of initiatives taken by the SET Foundation.",
        link: {
          href: "/#team",
          caption: "Meet the team",
        },
      },
    },
  ],
};
