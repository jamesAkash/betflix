import React from "react";
import { CssBaseline, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <CssBaseline />
      <Typography variant="h4">Testing CssBaseline</Typography>
      <Outlet />
    </div>
  );
}

export default App;
