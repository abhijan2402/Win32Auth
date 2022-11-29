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
          <Typography variant="h5" padding={3} textAlign="center">Log in</Typography>

          <TextField margin="normal" id="outlined-basic" label="Email" variant="outlined" size='large' color="warning" style={{ width: "80%", borderRadius: "10px" }} />
          <TextField margin="normal" id="outlined-basic" label="Password" variant="outlined" size='large' color="warning" style={{ width: "80%", borderRadius: "10px" }} />


          {/* <TextField margin="normal" type={'text'} variant="outlined" placeholder="Name" /> */}
          {/* <TextField margin="normal" type={'email'} id="outlined-basic" variant="outlined" placeholder="Email" width="100%" color="warning" style={{ color: "black", width: "80%" }} />
          <TextField margin="normal" type={'password'} variant="outlined" placeholder="Password" style={{ color: "black", width: "80%" }} /> */}


          <Button
            sx={{ marginTop: 3, borderRadius: 2, width: "80%", padding: 1 }}
            variant="contained"
            color="warning"

          >Login</Button>
          <Typography style={{ marginTop: "30px", color: "blue" }}>Forgot Password?</Typography>


        </Box>
      </form>
    </div>
  );
};

export default Login;
