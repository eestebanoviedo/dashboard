import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Components/temaConfig.js";

import Contenedor from "./Components/Contenedor.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Contenedor />
    </ThemeProvider>
  );
}

export default App;
