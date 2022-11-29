import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import Modal from '@mui/material/Modal';

const Login = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid orange',
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          <Button
            sx={{ marginTop: 3, borderRadius: 2, width: "80%", padding: 1 }}
            variant="contained"
            color="warning"
            onClick={handleOpen}

          >Login</Button>
          <Typography style={{ marginTop: "30px", color: "blue" }}>Forgot Password?</Typography>


        </Box>
      </form>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter the OTP
          </Typography>
          <TextField margin="normal" id="outlined-basic" label="Enter 6 diigt OTP" variant="outlined" size='large' color="warning" style={{ width: "100%", borderRadius: "10px" }} />
          <Button
            sx={{ marginTop: 3, borderRadius: 2, width: "100%", padding: 1 }}
            variant="contained"
            color="warning"
            onClick={handleOpen}

          >Next</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Login;
