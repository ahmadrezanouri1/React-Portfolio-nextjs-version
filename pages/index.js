import Head from "next/head";
import React, { useState } from "react";
import Style from "../src/styles/scss/BaseLayout.module.scss";
import { Box, Grid } from "@mui/material";
import Home from "components/home/Home";

export default function page({ dark }) {
  return (
    <>
      <Head>
        <title>Ahmadreza Nouri</title>
        <meta
          name="description"
          content="abolfazl abolghasemi front-end developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/solidity.png" />
      </Head>
      <Box className={dark ? Style.dark : Style.light}>
        <Grid
          container
          display={"flex"}
          flexDirection={"column"}
          minHeight={"100vh"}
          justifyContent={"space-between"}
        >
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
              <p style={{ textAlign: "center" }}>
                template created with &hearts; by Ahmadreza Nouri
              </p>
              <p>&copy; 2023</p>
              
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
