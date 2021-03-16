import React from "react";
// import Dashboard from "./Dashboard.js";
// import ResponsiveDrawer from "./DashboardStatic.js";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./Components/temaConfig.js";

import NavBar from "./Components/NavBar";
import Typography from "@material-ui/core/Typography";
import Listas from "./Components/listItems.js";
import Oculto from "./Components/Oculto.jsx";
import Contenedor from "./Components/Contenedor.jsx";

function App() {
  // const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Contenedor /> 
    </ThemeProvider>
  );
}

export default App;
