import React from 'react';
import { Box, Button, IconButton, ThemeProvider, Typography } from '@mui/material';
import SHOP_LOGO from "../../assets/logo-shopping.png";
import { theme } from '../../CustomTheme/MaterialTheme';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';





const Footer = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <div style={{ marginTop: 100, paddingTop: 50, paddingBottom: 50, background: "#ccebff" }}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <IconButton
              sx={{ mr: 2, color: "white" }}
            >
              <img src={SHOP_LOGO} alt="SHOP_LOGO" style={{ height: "4vh", width: "2vw" }} />
            </IconButton>
            <Typography variant='h6' sx={{ color: "black", fontWeight: "bold", ml: -2 }}>Eflyer</Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Button sx={{ mr: 2, textTransform: "none", borderRadius: 5, color: "black", '&:hover': { backgroundColor: 'green', color: 'white', }, }}>Products</Button>
            <Button sx={{ mr: 2, textTransform: "none", borderRadius: 5, color: "black", '&:hover': { backgroundColor: 'green', color: 'white', }, }}>About</Button>
            <Button sx={{ mr: 2, textTransform: "none", borderRadius: 5, color: "black", '&:hover': { backgroundColor: 'green', color: 'white', }, }}>Contact</Button>
            <Button sx={{ mr: 2, textTransform: "none", borderRadius: 5, color: "black", '&:hover': { backgroundColor: 'green', color: 'white', }, }}>Privacy Policy</Button>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <IconButton
              sx={{ mr: 2, color: "#1a75ff",'&:hover': { backgroundColor: "#cce6ff" }, }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              sx={{ mr: 2, color: "#ff6600",'&:hover': { backgroundColor: "#cce6ff" }, }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              sx={{ mr: 2, color: "#66ccff",'&:hover': { backgroundColor: "#cce6ff" }, }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              sx={{ mr: 2, color: "#0A66C2",'&:hover': { backgroundColor: "#cce6ff" }, }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
          <Box sx={{ textAlign: "center", mt: 10 }}>
            <Typography variant='body1' sx={{ color: "#8c8c8c", fontWeight: "bold" }}>© 2023 Eflyer || All rights reserved.</Typography>
          </Box>
        </div>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default Footer;