import { Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

const Draft = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Paper elevation={1}>Test1</Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={1}>Test2</Paper>
      </Grid>
    </Grid>
  );
};

export default Draft;
