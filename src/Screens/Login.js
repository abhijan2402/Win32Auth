import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const Login = () => {
  
  return (
    <div>
      <form>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems={"center"}
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px 10px #ccc",
            },
          }}
        >
          <Typography variant="h5" padding={3} textAlign="center">Login</Typography>

          {/* <TextField margin="normal" type={'text'} variant="outlined" placeholder="Name" /> */}
          <TextField margin="normal" type={'email'} variant="outlined" placeholder="Email"  />
          <TextField margin="normal" type={'password'} variant="outlined" placeholder="Password"  />

          <Button
            sx={{ marginTop: 3, borderRadius: 3, width: "57%" }}
            variant="contained"
            color="warning"
           
          >Login</Button>


        </Box>
      </form>
    </div>
  );
};

export default Login;
