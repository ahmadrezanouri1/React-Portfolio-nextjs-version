import React, { useState } from "react";
import Style from "../../src/styles/scss/BaseLayout.module.scss";
import Navbar from "./Navbar";
import { Box, Grid } from "@mui/material";

export default function BaseLayout() {
  let [darkMode, setDarkMode] = useState(true);

  function handleClick() {
    setDarkMode(!darkMode);
  }

  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}
      >
        <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleClick} />
        </Grid>
        <Grid item>
          <Box
            component={"footer"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            py={"1.5rem"}
            sx={{ opacity: 0.7 }}
            width={"100%"}
          >
            <p>template created with &hearts; by Payton Pierce</p>
            <p>&copy; 2022</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
