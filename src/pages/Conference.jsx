import {
  About,
  Landing,
  PastConference,
  Schedule,
  Section,
  Sponsors,
  Why,
} from "../components/conference";
import { Anchor, Countdown } from "../components/common";

import React from "react";

export const Conference = (props) => (
  <div id="conference">
    <Landing data={props.data.hero} />
    <Sponsors data={props.data.sponsors} />

    <Anchor anchor="about" />
    <Section
      data={{
        text: {
          title: "A conference to inspire and empower",
          content: (
            <>
              SET is a one-day conference geared towards high school students
              who are considering or interested in pursuing engineering and
              technology. At SET, students will have the opportunity to glimpse
              into the nature of engineering, through engaging in networking
              with students, professors, engineers, and firms, and experiencing
              hands-on workshops and activities. Our conference will give
              students a broader perspective in choosing their career path, and
              allow them to make an informed choice. Although we believe that
              SET is suitable for high school students, anyone is welcome to
              sign up and attend SET!
              <br />
              <br />
              We are non-profit, student-run organisation founded by a group of
              high school students from Ottawa, Ontario.
              <br />
              <br />
              Today, high school students live in a digital generation,
              Generation Z. Technology has advanced faster than it ever has
              before, giving our generation access to new forms of knowledge,
              communication, and careers. The world is changing at a faster rate
              than ever before, and we want to inspire the next generation of
              engineers to follow their dreams, and to continue this trend.{" "}
              <br />
              <br />
              Despite the emergence of technology and engineering as fields of
              study, many high school students never get the opportunity to
              experience what engineering is truly like.
              <br />
              <br />
              SET will give students the tools and mentors to help students
              immerse themselves in a real-world engineering environment, and
              help them take the first step in becoming tomorrow’s future STEM
              leaders.
            </>
          ),
        },
      }}
    />

    <About data={props.data.about} />
    <Countdown
      target={props.data.countdown.time}
      location={props.data.countdown.location}
      delayedMessage={true}
    />

    <Anchor anchor="why" />
    <Why data={props.data.why} />

    <Anchor anchor="schedule" />
    <Schedule data={props.data.schedule} />

    <Anchor anchor="past" />
    <PastConference data={props.data.past} />
  </div>
);
