import React, { useState } from "react";
import Toggler from "./home/Toggler";
import { Box } from "@mui/material";
import Link from "next/link";
import Style from "../src/styles/scss/BaseLayout.module.scss";

const links = [
  {
    name: "Home",
    to: "/",
    active: "home",
  },
  {
    name: "About Me",
    to: "/about",
    active: "about",
  },
  {
    name: "",
    to: "/about",
    active: "about",
  },
];

export default function Navbar({ handleDark }) {
  const [darkMode, setDarkMode] = useState(false);

  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <Box
      component={"nav"}
      width={"100%"}
      sx={{ padding: "10px 0" }}
      className={darkMode ? Style.dark : Style.light}
    >
      <Box
        component={"ul"}
        display={"flex"}
        justifyContent={"center"}
        pt={2}
        gap={{ xs: "2rem", md: "8rem" }}
        textTransform={"lowercase"}
        fontSize={"1rem"}
      >
        {links.map((link, index) => (
          <Box
            key={index}
            component={"li"}
            sx={{
              fontFamily: "Trebuchet MS, sans-serif",
              listStyle: "none",
            }}
          >
            <Link href={link.to}>
              {!link.type && (
                <p style={{ paddingBottom: "0.5rem" }}>{link.name}</p>
              )}
              {link.type && <h1>{link.name}</h1>}
            </Link>
          </Box>
        ))}
        <li style={{ listStyle: "none" }} onClick={() => handleClick()}>
          <Toggler darkMode={darkMode} handleClick={handleDark} />
        </li>
      </Box>
    </Box>
  );
}
