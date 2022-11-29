import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const SignUp = () => {

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
                    <Typography variant="h5" padding={3} textAlign="center">Sign Up</Typography>


                    <TextField margin="normal" id="outlined-basic" label="Email" variant="outlined" size='large' color="warning" style={{ width: "80%", borderRadius: "10px" }} />
                    <TextField margin="normal" id="outlined-basic" label="Password" variant="outlined" size='large' color="warning" style={{ width: "80%", borderRadius: "10px" }} />
                    <TextField margin="normal" id="outlined-basic" label="Confirm Password" variant="outlined" size='large' color="warning" style={{ width: "80%", borderRadius: "10px" }} />


                    <Button
                        sx={{ marginTop: 3, borderRadius: 2, width: "80%", padding: 1 }}
                        variant="contained"
                        color="warning"

                    >SignUp</Button>
                    <Typography style={{ marginTop: "30px", color: "blue" }}>Back to login</Typography>



                </Box>
            </form>
        </div>
    );
};

export default SignUp;
