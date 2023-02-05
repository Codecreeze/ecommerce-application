import React, { useEffect, useState } from 'react';
import {
    Box,
    Grid,
    IconButton,
    Stack,
    ThemeProvider,
    Typography
} from '@mui/material';
import { Menu, Person, ShoppingCart } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchTerm } from '../../Redux/Slices/ProductListSlice';
import ResponsiveSearch from './ResponsiveSearch';
import { theme } from '../../CustomTheme/MaterialTheme';
import { getCategories, getCategoryWiseData } from '../../Redux/AsyncThunk/prodThunk';
import { updateCategory } from '../../Redux/Slices/CategorySlice';



const Search = (props) => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState(0);
    const [query, setQuery] = useState("");


    const { loading, categoryData, categoryList } = useSelector((state) => state.categ);

    

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])

    useEffect(() => {
        dispatch(getCategoryWiseData())
    }, [dispatch,categoryList])

    const handleChangeSearch = (e) => {
        setQuery(e.target.value);
        dispatch(updateSearchTerm(query));
    };

    const handleSearch = () => {
        dispatch(updateSearchTerm(query));
    };


    return (
        <React.Fragment>
            <ResponsiveSearch />
            <ThemeProvider theme={theme}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    mt={5} >
                    <Stack sx={{ display: { xs: "none", md: "block" } }}>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", color: "white" }} >Eflyer</Typography>
                        </Box>

                        <Box>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                sx={{ mr: 2, color: "white" }}
                            >
                                <Menu sx={{ fontSize: 45 }} />
                            </IconButton>
                            <select
                                value={category}
                                onChange={(e) => { setCategory(e.target.value); dispatch(updateCategory(e.target.value)) }}
                                style={{
                                    marginTop: 5, padding: 5,
                                    background: "#333333",
                                    color: "white", minHeight: 25,
                                    marginRight: 10, borderRadius: 5
                                }}
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
                            <input
                                className="search-bar"
                                value={query}
                                onChange={handleChangeSearch}
                                placeholder="Search this blog"
                                style={{
                                    marginLeft: 15,
                                    paddingLeft: 7,
                                    paddingRight: 20,
                                    border: "3px solid white",
                                    minWidth: "25vw",
                                    minHeight: 20,
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
                                    mr: 2,
                                    color: "white",
                                    background: "red",
                                    borderRadius: 1,
                                    width: 40,
                                    height: 32,
                                    '&:hover': {
                                        backgroundColor: 'green',
                                        color: 'white',
                                    },
                                }}
                                onClick={handleSearch}
                            >
                                <SearchIcon fontSize="medium" />
                            </IconButton>
                            <select
                                style={{
                                    marginTop: 5,
                                    padding: 5,
                                    background: "white",
                                    color: "black",
                                    border: "1px solid white",
                                    minHeight: 25,
                                    marginRight: 10,
                                    width: "7vw",
                                    borderRadius: 5
                                }}
                            >
                                <option value={0}>
                                    🇬🇧 English
                                </option>
                            </select>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                sx={{
                                    mx: 3,
                                    color: "#003300",
                                    borderRadius: 1,
                                    width: 40,
                                    height: 32,
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    },
                                }}
                            >
                                <ShoppingCart fontSize="medium" />
                                <Typography sx={{ color: "white", fontWeight: "bold", ml: 1 }}>Cart</Typography>
                            </IconButton>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                sx={{
                                    mx: 5,
                                    color: "#003300",
                                    borderRadius: 1,
                                    width: 40,
                                    height: 32,
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                    },
                                }}
                            >
                                <Person fontSize="medium" />
                                <Typography sx={{ color: "white", fontWeight: "bold" }}>Pradeep</Typography>
                            </IconButton>
                        </Box>
                        <Box sx={{ textAlign: "center" }}>
                            <Typography variant='h5' sx={{ fontWeight: "bold", color: "black" }}>Get Start Your Favourite  Shopping!</Typography>
                        </Box>
                    </Stack>
                </Grid>
            </ThemeProvider>
        </React.Fragment>
    )
}

export default Search;