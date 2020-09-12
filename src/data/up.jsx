import { Briefcase, Clock, Users } from "styled-icons/fa-solid";
import { NetworkChart, Trophy } from "styled-icons/boxicons-regular";
import { Tool, User } from "styled-icons/feather";

import Arnaud from "../assets/images/arnaud.jpg";
import Benoit from "../assets/images/benoit.jpg";
import Competition from "../assets/images/pitch.jpg";
import Conference2018 from "../assets/images/2018.jpg";
import Conference2019 from "../assets/images/2019.jpg";
import Derek from "../assets/images/derek.jpg";
import Franck from "../assets/images/franck.jpg";
import James from "../assets/images/james.jpg";
import Marc from "../assets/images/marc.jpg";
import Murat from "../assets/images/murat.png";
import Networking from "../assets/images/network.jpg";
import Speaker from "../assets/images/speaker.jpg";
import Timothy from "../assets/images/timothy.jpg";
import Workshops from "../assets/images/competition.jpg";

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
    location: null, // { caption: "TBD", href: "" },
    time: null, // "Nov 17, 2020",
  },
  why: [
    {
      image: Speaker,
      icon: User,
      reason: "Guest speakers",
      description: "veterans here to discuss important topics in engineering.",
    },
    {
      image: Networking,
      icon: NetworkChart,
      reason: "Networking",
      description:
        "a chance to ask questions and talk with with professionals.",
    },
    {
      image: Workshops,
      icon: Tool,
      reason: "Workshops",
      description: "hands-on activities led by industry professionals.",
    },
    {
      image: Competition,
      icon: Trophy,
      reason: "Competition",
      description:
        "a friendly engineering challenge with prizes for winning teams!",
    },
  ],
  past: {
    title: "Past conferences",
    description:
      "Last year, we hosted our second annual SET conference on November 9, 2019 at the uOttawa SITE building. Thank you to all the speakers, sponsors, and students who made it possible, and we hope to see you again this fall!",
    conferences: {
      2019: {
        competition:
          "We put your skills to the test in a sustainable, cost-effective house-design competition. In less than 3 hours, each team produced a prototype model and a sales pitch for their house. We were all extremely impressed by what you guys made and we're very excited to see what you'll accomplish as future engineers!",
        image: Conference2019,
        winners: [
          {
            place: "1st",
            name: "Bartholomew",
          },
          {
            place: "2nd",
            name: "Ateebullah",
          },
          {
            place: "3rd",
            name: "Team Name",
          },
        ],
        speakers: [
          {
            avatar: Derek,
            name: "Derek Glennie",
          },
          {
            avatar: James,
            name: "James Green",
          },
          {
            avatar: Marc,
            name: "Marc Doumit",
          },
          {
            avatar: Timothy,
            name: "Timothy Lethbridge",
          },
        ],
      },
      2018: {
        competition:
          "We put your skills to the test in the design and build of a model car. In less than 3 hours, each team produced a prototype model for their car. We were all extremely impressed by what you guys made and we're very excited to see what you'll accomplish as future engineers!",
        image: Conference2018,
        winners: [
          {
            place: "1st",
            name: "Team RIP",
          },
          {
            place: "2nd",
            name: "Double L's",
          },
          {
            place: "3rd",
            name: "Team Bitconnect",
          },
        ],
        speakers: [
          {
            avatar: Franck,
            name: "Franck Dervault",
          },
          {
            avatar: Benoit,
            name: "Benoit Lessard",
          },
          {
            avatar: Murat,
            name: "Dr. Murat Saatcioglu",
          },
          {
            avatar: Arnaud,
            name: "Dr. Arnaud Weck",
          },
        ],
      },
    },
  },
};
