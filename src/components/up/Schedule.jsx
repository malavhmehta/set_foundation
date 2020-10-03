import { hex2rgba, media, theme } from "../../styles";

import Fade from "react-reveal";
import React from "react";
import styled from "styled-components";

const { colors, fontSizes } = theme;

const Heading = styled.h2`
  color: ${colors.text};
  font-size: ${fontSizes.lg};
  ${media.md`font-size: ${fontSizes.xl}`};
  font-weight: 500;
  margin: 1rem 0 1.5rem;
  text-align: center;
`;

const Content = styled.p`
  color: ${colors.text};
  font-size: ${fontSizes.sm};
  ${media.md`font-size: ${fontSizes.md}`};
  font-weight: 500;
  max-width: 600px;
  opacity: 0.6;
  text-align: center;
  margin: 0 0 2.25rem;
`;

const Table = styled.table.attrs({ className: "table" })`
  width: 100%;
`;

const Th = styled.th.attrs({ scope: "col" })`
  color: ${colors.text};
  font-size: ${fontSizes.sm};
  font-weight: 700;
  padding: 25px 15px !important;
  border: none !important;
`;

const Tr = styled.tr`
  border: ${({ alt }) =>
    alt ? `1px solid ${hex2rgba(colors.text, 0.08)}` : `none !important`};
  border-left: none !important;
  border-right: none !important;
  background-color: ${({ alt }) =>
    alt ? `${hex2rgba(colors.text, 0.025)}` : `${colors.bg}`};
`;

const Td = styled.td`
  color: ${colors.text};
  font-size: ${fontSizes.sm};
  font-weight: 400;
  padding: 25px 15px !important;
  border: none !important;
`;

export const Schedule = ({ data }) => (
  <div className="container pb-5" style={{ marginBottom: "8rem" }}>
    <div className="row">
      <div className="col-12 d-flex flex-column align-items-center justify-content-center">
        <Fade bottom>
          <Heading>SET UP Schedule</Heading>
          <Content>
            Over a 2 and 1/2 hour period, we will feature talks from 7 speakers.
          </Content>
        </Fade>
      </div>
    </div>

    <div className="row">
      <div className="col-md-1 col-lg-2" />
      <div className="col-12 col-md-10 col-lg-8">
        <div className="row">
          <div className="col-12">
            <Fade bottom>
              <Table>
                <thead>
                  <Tr alt={false}>
                    {data.rows.map((row) => (
                      <Th key={row}>{row}</Th>
                    ))}
                  </Tr>
                </thead>
                <tbody>
                  {data.columns.map((column, index) => (
                    <Tr alt={!(index & 1)} key={index + "__schedule__"}>
                      {column.map((val, index) => (
                        <Td
                          style={{ fontWeight: index === 0 ? 600 : 400 }}
                          key={val}
                        >
                          {val}
                        </Td>
                      ))}
                    </Tr>
                  ))}
                </tbody>
              </Table>
            </Fade>
          </div>
        </div>
      </div>
      <div className="col-md-1 col-lg-2" />
    </div>
  </div>
);
