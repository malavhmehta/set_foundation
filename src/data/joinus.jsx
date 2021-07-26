import {
  Briefcase,
  Building,
  Bullhorn,
  CashRegister,
  ClipboardCheck,
  Poll,
} from "styled-icons/fa-solid";

import React from "react";

export const joinUs = {
  hero: {
    title: {
      base: "SET Conference ",
      extensions: ["2021", 1e10],
    },
    lead:
      "We are excited to announce that applications for the SET 2021 Conference Team are now open!",
  },
  about: {
    title: "Roles",
    cards: [
      {
        icon: Bullhorn,
        title: "Co-Presidents",
        content: (
          <>
            <b>Responsibilities</b>
            <ul>
              <li>Oversee and manage the conference team</li>
              <li>Liaison with the national team & development team</li>
            </ul>
          </>
        ),
        post: (
          <>
            <b>Desirable Experience</b>
            <ul>
              <li>Team leadership and organizational abilities</li>
              <li>Strong problem solving skills</li>
              <li>Good written and verbal communication</li>
            </ul>
          </>
        ),
      },
      {
        icon: Poll,
        title: "Marketing",
        content: (
          <>
            <b>Responsibilities</b>
            <ul>
              <li>Create a marketing campaign to attract participants</li>
              <li>Manage a social media presence for the SET conference</li>
            </ul>
          </>
        ),
        post: (
          <>
            <b>Desirable Experience</b>
            <ul>
              <li>Good knowledge with social media outreach</li>
              <li>An eye for aesthetic design</li>
              <li>Experience with creating marketing campaigns</li>
            </ul>
          </>
        ),
      },
      {
        icon: Building,
        title: "Corporate Outreach",
        content: (
          <>
            <b>Responsibilities</b>
            <ul>
              <li>
                Contact businesses and funding organizations to get support
                (monetary and other)
              </li>
              <li>
                Create sponsorship materials including emails, package, and
                pitch deck
              </li>
            </ul>
          </>
        ),
        post: (
          <>
            <b>Desirable Experience</b>
            <ul>
              <li>Strong written & verbal communication skills</li>
              <li>Experience with fundraising or similar</li>
            </ul>
          </>
        ),
      },
      {
        icon: ClipboardCheck,
        title: "Logistics & Platform",
        content: (
          <>
            <b>Responsibilities</b>
            <ul>
              <li>Set up and manage the online platform for the conference</li>
              <li>Create the schedule for the conference</li>
              <li>
                Coordinate activities during the conference and the
                judging/prize-distribution process
              </li>
            </ul>
          </>
        ),
        post: (
          <>
            <b>Desirable Experience</b>
            <ul>
              <li>
                Experience with online event platforms such as Hopin, etc.
              </li>
              <li>Strong organizational skills</li>
              <li>
                Experience with organizing events, particularly design
                competitions or science fairs
              </li>
            </ul>
          </>
        ),
      },
      {
        icon: Briefcase,
        title: "Industry Outreach",
        content: (
          <>
            <b>Responsibilities</b>
            <ul>
              <li>
                Reach out to industry professionals and academics to find
                speakers and panelists for the conference{" "}
              </li>
              <li>Organize panel/workshop logistics during the conference </li>
              <li>Organize honorariums</li>
            </ul>
          </>
        ),
        post: (
          <>
            <b>Desirable Experience</b>
            <ul>
              <li>Strong written & verbal communication skills</li>
              <li>High level of organization</li>
            </ul>
          </>
        ),
      },
      {
        icon: CashRegister,
        title: "Finance",
        content: (
          <>
            <b>Responsibilities</b>
            <ul>
              <li>Keep accurate financial records for the conference team</li>
              <li>Make monthly financial reports</li>
              <li>Communicate with the National Team for reimbursements</li>
            </ul>
          </>
        ),
        post: (
          <>
            <b>Desirable Experience</b>
            <ul>
              <li>
                Familiarity with excel, google sheets, or other spreadsheet
                software
              </li>
              <li>
                Previous experience managing transactions and recordkeeping
              </li>
            </ul>
          </>
        ),
      },
    ],
  },
};
