import React, { useState, useEffect } from "react";
import axios from "axios";
import Inputs from "./components/Inputs";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./components/theme/theme";
import HeaderNav from "./components/header/HeaderNav";
import Hero from "./components/hero/Hero";

function App() {
  const [datas, setDatas] = useState([]);
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [copyUrl, setCopyUrl] = useState("Copy");

  const onchange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(search);
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
      />
      {/* <ShortUrl  /> */}
    </ChakraProvider>
  );
}

export default App;
