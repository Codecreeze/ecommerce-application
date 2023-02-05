import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, IconButton, Stack, ThemeProvider, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchTerm } from '../../Redux/Slices/ProductListSlice';
import { theme } from '../../CustomTheme/MaterialTheme';
import { getCategories } from '../../Redux/AsyncThunk/prodThunk';
import { updateCategory } from '../../Redux/Slices/CategorySlice';
import SHOPIAMGE from "../../assets/big-shopping-sale.png";



const ResponsiveSearch = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState(0);
    const [query, setQuery] = useState("");


    const { loading, categoryData } = useSelector((state) => state.categ);

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    const handleChangeSearch = (e) => {
        setQuery(e.target.value);
        dispatch(updateSearchTerm(query));

    };

    const handleSearch = () => {
        dispatch(updateSearchTerm(query));
    };





    return (
        <div>
            <ThemeProvider theme={theme}>
                <Box sx={{ display: { xs: "block", md: "none" }, mt: 10, textAlign: "right", mr: 2 }}>
                    <Button variant='outlined' sx={{ px: 1, textTransform: "none" }}>🇬🇧 English</Button>
                </Box>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ mt: 10, mb: 2 }} >

                    <Grid item xs={12} sx={{ display: { xs: "block", md: "none" } }}>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography variant='h4' sx={{ fontWeight: "bold", color: "white" }} >Eflyer</Typography>
                        </Box>
                        <Stack direction="column" spacing={3} ml={3}>
                            <select
                                value={category}
                                onChange={(e) => { setCategory(e.target.value); dispatch(updateCategory(e.target.value)) }}
                                style={{ marginTop: 5, padding: 5, background: "#333333", color: "white", minHeight: 30, width: "78vw", borderRadius: 5 }}
                            >
                                <option value={0}>All categories</option>
                                {loading ?
                                    (<>
                                        Loading...
                                    </>)
                                    : (<>
                                        {categoryData.map((row, index) => {
                                            return (
                                                <option key={index} value={row}>{row}</option>
                                            )
                                        })}
                                    </>)}
                            </select>
                            <Box sx={{ display: "flex" }}>
                                <input
                                    className="search-bar"
                                    placeholder="Search this blog"
                                    value={query}
                                    onChange={handleChangeSearch}
                                    style={{
                                        paddingLeft: 7,
                                        paddingRight: 20,
                                        border: "3px solid white",
                                        width: "70vw",
                                        minHeight: 25,
                                        color: "black",
                                        padding: 5,
                                        borderRadius: 5
                                    }}
                                />
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="start"
                                    sx={{
                                        color: "white",
                                        background: "red",
                                        borderRadius: 1,
                                        minWidth: "7vw",
                                        height: 32,
                                        '&:hover': {
                                            backgroundColor: 'green',
                                            color: 'white',
                                        },
                                    }}
                                    onClick={handleSearch}
                                >
                                    <Search fontSize="medium" />
                                </IconButton>
                            </Box>
                            <Box sx={{ textAlign: "center" }}>
                                <img src={SHOPIAMGE} alt={SHOPIAMGE} style={{ height: "50vh", width: "90vw" }} />
                            </Box>
                            <Box sx={{ textAlign: "center" }}>
                                <Button variant='contained'
                                    sx={{
                                        borderRadius: 5,
                                        background: "#66c2ff",
                                        '&:hover': {
                                            backgroundColor: 'green',
                                            color: 'white',
                                        },
                                        mt: 2
                                    }}> Buy Now</Button>
                            </Box>
                        </Stack>
                    </Grid>

                </Grid>
            </ThemeProvider>
        </div>
    )
}

export default ResponsiveSearch;