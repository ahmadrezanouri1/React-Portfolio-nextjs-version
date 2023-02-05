import React, { useState } from "react";
import Toggler from "./home/Toggler";
import { Box } from "@mui/material";
import { info } from "./Info";

export default function Navbar({ darkMode, handleClick }) {
  return (
    <Box component={"nav"} width={"100%"}>
      <Box
        component={"ul"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={{ xs: "2rem", md: "8rem" }}
        textTransform={"lowercase"}
        fontSize={"1rem"}
      >
        <li>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </Box>
    </Box>
  );
}
