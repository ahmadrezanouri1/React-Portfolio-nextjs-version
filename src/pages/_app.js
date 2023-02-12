import "@/styles/globals.css";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "components/Navbar";
import Style from "../../src/styles/scss/BaseLayout.module.scss";
import { Box } from "@mui/material";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  const handleDark = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <Box>
        <Navbar handleDark={handleDark} />
        <Component {...pageProps} dark={darkMode} />
      </Box>
    </>
  );
}
