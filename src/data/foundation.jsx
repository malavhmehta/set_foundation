import { Cast, Code, Speaker } from "styled-icons/feather";

import Section1 from "../assets/images/foundation_section_1.jpg";
import Section2 from "../assets/images/foundation_section_2.jpg";

export const foundation = {
  hero: {
    expanded: "Students in Engineering and Technology",
    title: "SET.Foundation",
    lead:
      "The SET Foundation is a student-led non-profit organization that creates opportunities for students aspiring to achieve within the STEM fields.",
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
        icon: Cast,
        title: "SET UP",
        href: "/up",
        description:
          "Our first ever virtual university showcase, SET UP, featuring undergraduates and professors from engineering and technology programs across Canada!",
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
        title:
          "Meet the team of student volunteers that runs the SET Foundation.",
        content:
          "What started as a small team back in 2018 quickly grew into a larger team to support the growing number of initiatives taken by the SET Foundation.",
        link: {
          href: "/#team",
          caption: "Meet the team",
        },
      },
    },
  ],
  teams: [
    {
      label: "The national board",
      team: {
        2020: [
          {
            role: "President",
            name: "Nathan Biniam",
            image: "https://i.ibb.co/cvrHHvq/img.png",
          },
          {
            role: "Marketing Director",
            name: "Mingde Yin",
            image: "https://i.ibb.co/bzXmBnq/mingde.png",
          },
          {
            role: "Outreach Director",
            name: "Sreepriya Pulyassary",
            image: "https://i.ibb.co/cvrHHvq/img.png",
          },
          {
            role: "Finance Director",
            name: "Muzammiluddin Syed",
            image: "https://i.ibb.co/cvrHHvq/img.png",
          },
          {
            role: "Logistics Director",
            name: "Victor Wang",
            image: "https://i.ibb.co/tXjGtFQ/victor.png",
          },
          {
            role: "Board Member",
            name: "Terry Ju",
            image: "https://i.ibb.co/cvrHHvq/img.png",
          },
          {
            role: "Board Member",
            name: "Dhruv Rawat",
            image: "https://i.ibb.co/cvrHHvq/img.png",
          },
          {
            role: "Corporate Relations",
            name: "David Chen",
            image: "https://i.ibb.co/txzTFdg/david.png",
          },
        ],
      },
    },
    {
      label: "The SET Ottawa Team",
      team: {
        2020: [
          {
            role: "Co-president",
            name: "Albert Nitu",
            image: "https://i.ibb.co/4sR1M2N/albert.png",
          },
          {
            role: "Co-president",
            name: "Ayan Hafeez",
            image: "https://i.ibb.co/NyFrkN0/ayan.png",
          },
          {
            role: "Logistics Director",
            name: "Allen Tao",
            image: "https://i.ibb.co/Y746rzW/allen.png",
          },
          {
            role: "Corporate Relations",
            name: "Derek Huynh",
            image: "https://i.ibb.co/NV4ByN1/derek.png",
          },
          {
            role: "Web Developer",
            name: "Malav Mehta",
            image: "https://i.ibb.co/qpvt1Gs/Malav-Mehta.jpg",
          },
          {
            role: "Plenary Director",
            name: "Maleeka Ellaithy",
            image: "https://i.ibb.co/WPkFVgG/maleeka.png",
          },
          {
            role: "Internal Affairs",
            name: "Matthew Biniam",
            image: "https://i.ibb.co/d2TSDcZ/matthew.png",
          },
          {
            role: "Marketing Director",
            name: "Vanie Tran",
            image: "https://i.ibb.co/7j7p1Tz/vanie.png",
          },
          {
            role: "Finance Director",
            name: "Vansh Sethi",
            image: "https://i.ibb.co/P5MvDh1/vansh.png",
          },
        ],
        2019: [
          {
            role: "Co-president",
            name: "Dhruv Rawat",
            image: "https://i.ibb.co/cvrHHvq/img.png",
          },
          {
            role: "Co-president",
            name: "Kailey Chen",
            image: "https://i.ibb.co/cvrHHvq/img.png",
          },
          {
            role: "Finance Director",
            name: "Ayan Hafeez",
            image: "https://i.ibb.co/NyFrkN0/ayan.png",
          },
          {
            role: "Corporate Relations",
            name: "Felix Hu",
            image: "https://i.ibb.co/cvrHHvq/img.png",
          },
          {
            role: "Plenary Director",
            name: "Avery Lin",
            image: "https://i.ibb.co/cvrHHvq/img.png",
          },
          {
            role: "Marketing Director",
            name: "Grace Gao",
            image: "https://i.ibb.co/cvrHHvq/img.png",
          },
        ],
      },
    },
  ],
};
