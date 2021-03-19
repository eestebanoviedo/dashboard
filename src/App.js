import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import Contenedor from "./Components/Contenedor.jsx";

function App() {
  return (
    <ThemeProvider>
      <Contenedor />
    </ThemeProvider>
  );
}

export default App;
