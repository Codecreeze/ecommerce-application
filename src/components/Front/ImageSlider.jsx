import React from 'react';
import { Box, Button, Grid, IconButton } from '@mui/material';
import ShoppingGirl from "../../assets/shopping-girl.png";
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';



const ImageSlider = () => {
    return (
        <div>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                mt={5} sx={{ display: { xs: "none", md: "block" } }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{
                            color: "black",
                            mr: { xs: 0, sm: 7, md: 20 },
                            border: "0px solid #e6f2ff",
                            background: "#e6f2ff",
                            '&:hover': {
                                backgroundColor: 'green',
                                color: 'white',
                            },
                        }}
                    >
                        <ArrowBackIosNew sx={{ fontSize: 30 }} />
                    </IconButton>

                    <img src={ShoppingGirl} alt="shopping-girl" style={{ height: "58vh", width: "35vw" }} />
                    <Box sx={{
                        position: "absolute",
                        transform: "translate(" - 50 % ", " - 50 % ")",
                    }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 40 }}>
                            <Button variant='contained'
                                sx={{
                                    borderRadius: 5,
                                    background: "#66c2ff",
                                    '&:hover': {
                                        backgroundColor: 'green',
                                        color: 'white',
                                    },
                                }}> Buy Now</Button>
                        </Box>
                    </Box>

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{
                            mr: 2,
                            color: "black",
                            ml: { xs: 0, sm: 7, md: 20 },
                            border: "0px solid #e6f2ff",
                            background: "#e6f2ff",
                            '&:hover': {
                                backgroundColor: 'green',
                                color: 'white',
                            },
                        }}
                    >
                        <ArrowForwardIos sx={{ fontSize: 30 }} />
                    </IconButton>

                </Box>
            </Grid>
        </div >
    )
}

export default ImageSlider;