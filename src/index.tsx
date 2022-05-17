import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

const root = createRoot(document.getElementById("app") as Element);
root.render(
  <Router>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Router>
);
