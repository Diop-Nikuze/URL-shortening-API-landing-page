import React, { useState, useEffect } from "react";
import axios from "axios";
// import isUrl from "validator/lib/isURL";
import Inputs from "./components/Inputs";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./components/theme/theme";
import HeaderNav from "./components/header/HeaderNav";
import Hero from "./components/hero/Hero";
import Stats from "./components/statistics/Stats";

function App() {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [copyUrl, setCopyUrl] = useState("Copy");
  const [primaryColor, setPrimaryColor] = useState("hsl(180, 66%, 49%)");
  const [secondaryColor, setSecondaryColor] = useState("white");

  const onchange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(search);
    setSearch("");
  };

  const handleCopyUrl = () => {
    setCopyUrl("Copied!");
  };

  useEffect(() => {
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((response) => {
        setDatas([response.data]);
        setLoading(false);
        setCopyUrl("Copy");
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  return (
    <ChakraProvider theme={theme}>
      <HeaderNav />
      <Hero />

      <Inputs
        handleSubmit={handleSubmit}
        onchange={onchange}
        loading={loading}
        setLoading={setLoading}
        datas={datas}
        copyUrl={copyUrl}
        handleCopyUrl={handleCopyUrl}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        setPrimaryColor={setPrimaryColor}
        setSecondaryColor={setSecondaryColor}
        search={search}
      />
      <Stats />
    </ChakraProvider>
  );
}

export default App;
