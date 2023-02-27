import React from "react";
import Style from "../../src/styles/scss/About.module.scss";
import Style2 from "../../src/styles/scss/BaseLayout.module.scss";

import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../Info";

export default function About({ dark }) {
  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cat about{firstName}{" "}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            about{firstName} <span className={Style.green}>(main)</span> ${" "}
          </span>
          {info.bio}
        </p>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd skills/tools
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            skills/tools <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <p style={{ color: info.baseColor }}> Proficient With</p>
        <ul className={Style.skills}>
          {info.skills.proficientWith.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <p style={{ color: info.baseColor }}> Exposed To</p>
        <ul className={Style.skills}>
          {info.skills.exposedTo.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd hobbies/interests
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            hobbies/interests <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      pt={"4rem"}
      className={dark ? Style2.dark : Style2.light}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}
