import React from "react";

export default function random() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [number5, setNumber5] = useState(0);
  const [number6, setNumber6] = useState(0);
  const [number7, setNumber7] = useState(0);
  const [number8, setNumber8] = useState(0);
  const [number9, setNumber9] = useState(0);

  function number() {
    const test1 = Math.floor(Math.random() * 9);
    if (test1 < 3) {
      setNumber1(test1 + 3);
    } else if (test1 > 9) {
      setNumber1(test1 - 1);
    }

    const test2 = Math.floor(Math.random() * 9);
    if (test1 < 3) {
      setNumber2(test2 + 3);
    } else if (test1 > 9) {
      setNumber2(test2 - 1);
    }

    const test3 = Math.floor(Math.random() * 9);
    if (test3 < 3) {
      setNumber3(test3 + 3);
    } else if (test3 > 9) {
      setNumber3(test3 - 1);
    }

    const test4 = Math.floor(Math.random() * 9);
    if (test4 < 3) {
      setNumber4(test4 + 3);
    } else if (test4 > 9) {
      setNumber4(test4 - 1);
    }

    const test5 = Math.floor(Math.random() * 9);
    if (test5 < 3) {
      setNumber5(test5 + 3);
    } else if (test5 > 9) {
      setNumber5(test5 - 1);
    }

    const test6 = Math.floor(Math.random() * 9);
    if (test6 < 3) {
      setNumber6(test6 + 3);
    } else if (test6 > 9) {
      setNumber6(test6 - 1);
    }

    const test7 = Math.floor(Math.random() * 9);
    if (test7 < 3) {
      setNumber7(test7 + 3);
    } else if (test7 > 9) {
      setNumber7(test7 - 1);
    }

    const test8 = Math.floor(Math.random() * 9);
    if (test8 < 3) {
      setNumber8(test8 + 3);
    } else if (test8 > 9) {
      setNumber8(test8 - 1);
    }

    const test9 = Math.floor(Math.random() * 9);
    if (test9 < 3) {
      setNumber9(test9 + 3);
    } else if (test9 > 9) {
      setNumber9(test9 - 1);
    }

    // setNumber1(Math.floor(Math.random() * 9));
    // setNumber2(Math.floor(Math.random() * 9));
    // setNumber3(Math.floor(Math.random() * 9));
    // setNumber4(Math.floor(Math.random() * 9));
    // setNumber5(Math.floor(Math.random() * 9));
    // setNumber6(Math.floor(Math.random() * 9));
    // setNumber7(Math.floor(Math.random() * 9));
    // setNumber8(Math.floor(Math.random() * 9));
    // setNumber9(Math.floor(Math.random() * 9));
  }

  return (
    <div>
      <button onClick={number}>Reload</button>
      <br />
      <h1>{number1}</h1>
      <h1>{number2}</h1>
      <h1>{number3}</h1>
      <h1>{number4}</h1>
      <h1>{number5}</h1>
      <h1>{number6}</h1>
      <h1>{number7}</h1>
      <h1>{number8}</h1>
      <h1>{number9}</h1>
    </div>
  );
}


// tooor
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
      <Grid item xs={4}>
        <Item>Item</Item>
      </Grid>
    </React.Fragment>
  );
}

export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}
