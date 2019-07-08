import React from "react";
import styled from "styled-components";
import * as Data from "./data/data";

import Header from "./components/header";
import ListLayout from "./components/listLayout";
import Footer from "./components/footer";

//Shared components
import Wrapper from "./sharedComponents/wrapper";

import "./App.css";

function App() {
  console.log("data should be here", Data);
  return (
    <div className="App">
      <Header />
      <Wrapper>
        <ListLayout posts={Data} />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
