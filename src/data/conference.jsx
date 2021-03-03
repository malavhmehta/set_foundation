import { Briefcase, Clock, Users } from "styled-icons/fa-solid";
import { NetworkChart, Trophy } from "styled-icons/boxicons-regular";
import { Tool, User } from "styled-icons/feather";

import Arnaud from "../assets/images/arnaud.jpg";
import Balsamiq from "../assets/images/balsamiq.png";
import Benoit from "../assets/images/benoit.jpg";
import Carleton from "../assets/images/carleton.png";
import Competition from "../assets/images/pitch.jpg";
import Conference2018 from "../assets/images/2018.jpg";
import Conference2019 from "../assets/images/2019.jpg";
import Derek from "../assets/images/derek.jpg";
import Fidus from "../assets/images/fidus.png";
import Franck from "../assets/images/franck.jpg";
import Huawei from "../assets/images/huawei.png";
import James from "../assets/images/james.jpg";
import Marc from "../assets/images/marc.jpg";
import Murat from "../assets/images/murat.png";
import Networking from "../assets/images/network.jpg";
import Password from "../assets/images/1password.png";
import React from "react";
import Repl from "../assets/images/repl.png";
import Rogers from "../assets/images/rogers.png";
import Speaker from "../assets/images/speaker.jpg";
import Timothy from "../assets/images/timothy.jpg";
import UOttawa from "../assets/images/uottawa.jpg";
import Wolfram from "../assets/images/wolfram.png";
import Workshops from "../assets/images/competition.jpg";

export const conference = {
  hero: {
    title: {
      base: "A conference for future ",
      extensions: ["engineers.", 1600, "innovators.", 1600],
    },
    lead:
      "Join like-minded high school students interested in pursuing a career in engineering and technology at SET Conference.",
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
      image: Fidus,
      name: "Fidus Systems",
      href: "https://fidus.com/",
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
    title: "What will I do at SET?",
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
        title: "2nd Annual Conference",
        desc: (
          <>
            A huge thank you to everyone who attended SET 2019! This event
            wouldn't have been possible without the support of our speakers,
            networkers, volunteers, sponsors and of course, the students! We
            were happy to see so much enthusiasm for engineering from both
            adults and students alike.
            <br />
            <br />
            We started off the day with a keynote speech from Derek Glennie, who
            gave us inspirational insight about practical tips and challenges
            faced by engineers. The next couple of hours passed by in a blur of
            workshops, pizza and networking; we're confident that every single
            person learned something new that morning.
          </>
        ),
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
        title: "The Inaugural Conference",
        desc: (
          <>
            Last year, we hosted the first-ever SET conference on October 20,
            2018 at the uOttawa SITE building. Thank you to all the speakers,
            sponsors, and students who made it possible, and we hope to see you
            again this fall!
          </>
        ),
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
  schedule: {
    rows: ["Event", "Duration"],
    columns: [
      ["Arrival", "8:00 to 8:30"],
      ["Kick-off and Opening Remarks", "8:30 to 9:00"],
      ["Keynote", "9:00 to 10:00"],
      ["Concurrent Workshops", "10:00 to 11:15"],
      ["Lunch", "11:15 to 12:00"],
      ["Networking with Professionals", "12:00 to 1:00"],
      ["Competition Announcement", "1:00 to 1:30"],
      ["Ideation and Prototype Building", "1:30 to 4:00"],
      ["Pitch Competition", "4:00 to 5:00"],
      ["Snack Break and Judge Deliberation", "5:00 to 5:30"],
      ["Awards Ceremony", "5:30 to 6:00"],
    ],
  },
};
