import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Container } from "@chakra-ui/react";

const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Container paddingTop="65">
        <Home />
        <About />
        <Projects />
        <Contact />
      </Container>
    </div>
  );
};

export default App;
