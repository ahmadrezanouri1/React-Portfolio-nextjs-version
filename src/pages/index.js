import Head from "next/head";
import React, { useState } from "react";
import Style from "../styles/scss/BaseLayout.module.scss";
import Navbar from "../../components/Navbar";
import { Box, Grid } from "@mui/material";
import Home from "components/home/Home";

export default function page() {
  const [darkMode, setDarkMode] = useState(true);

  function handleClick() {
    setDarkMode(!darkMode);
  }
  return (
    <>
      <Head>
        <title>Abolfazl.A</title>
        <meta
          name="description"
          content="abolfazl abolghasemi front-end developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/solidity.png" />
      </Head>
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
            <Home />
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
              <p>
                template created with &hearts; by Payton Pierce and change to
                the nextjs app by Abolfazl Abolghasemi
              </p>
              <p>&copy; 2022</p>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
