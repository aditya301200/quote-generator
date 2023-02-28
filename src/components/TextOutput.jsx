import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

export default function TextOutput() {
  const [quote, setQuote] = useState("Demo Quote");

    const handleQuote = async () => {
        const res = await axios.get("https://api.adviceslip.com/advice");
        setQuote(res.data.slip.advice)
    }

  return (
    <Grid
      container
      height="80vh"
      display="flex"
      flexDirection='column'
      gap='10px'
      alignItems="center"
      justifyContent="center"
    >
      <Item
        sx={{
          minHeight: "30%",
          minWidth: "40%",
          margin: '20px'
        }}
      >
        <h1>Advice for the day</h1>
        " {quote} "
      </Item>
        <Button variant="contained" onClick={handleQuote}>Generate Quote</Button>
    </Grid>
  );
}
