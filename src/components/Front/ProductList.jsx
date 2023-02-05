import React, { useEffect } from 'react';
import {
    Box,
    Grid,
    Card,
    Typography,
    CardContent,
    CardActions,
    CircularProgress,
    Rating,
    Stack,
    Button,
    ThemeProvider,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '../../Redux/AsyncThunk/prodThunk';
import { theme } from '../../CustomTheme/MaterialTheme';


const ProductList = () => {
    const dispatch = useDispatch();

    const { loading, searchTerm, productList } = useSelector((state) => state.list);
    const { categoryProduct } = useSelector((state) => state.categ);



    useEffect(() => {
        dispatch(getProductList());
    }, [dispatch])

    useEffect(() => {
        if (searchTerm === "") {
            dispatch(getProductList());
        }
    }, [dispatch, searchTerm]);

    const filterNames = (row) => {
        return (
            row.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        );
    };





    return (
        <div>
            <ThemeProvider theme={theme}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", color: "black" }}>Men & Women Fashion</Typography>
                </Box>
                {categoryProduct.length > 0 ?
                    <Grid container spacing={2} paddingX={2} sx={{ align: "center", justifyContent: "center" }} >
                        {categoryProduct.filter(filterNames).map((row, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={3} lg={3} xl={3} sx={{ my: 2 }} key={index}>
                                    <Card sx={{ maxWidth: 345, height: { xs: "75vh", sm: "80vh", lg: "70vh" }, borderRadius: 5 }}>
                                        <Box sx={{ textAlign: "center", my: 3 }}>
                                            <Typography variant='subtitle2' sx={{ color: "black", fontWeight: "bold" }}>{row.title}</Typography>
                                            <Typography variant='subtitle2' sx={{ color: "black" }}>
                                                <span style={{ color: "#ff6933" }}>
                                                    Price:
                                                </span>
                                                $ {row.price}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ textAlign: "center",display: { xs: "none", md: "block" } }}>
                                            <img src={row.image} alt={row.image} style={{ height: "25vh", width: "15vw" }} />
                                        </Box>

                                        <Box sx={{ textAlign: "center",display: { xs: "block", md: "none" } }}>
                                            <img src={row.image} alt={row.image} style={{ height: "15vh", width: "25vw" }} />
                                        </Box>
                                        <CardContent>
                                            <Box sx={{ textAlign: "center" }}>
                                                <Stack direction="row" sx={{ justifyContent: "space-between", mb: 2 }}>
                                                    <Typography component="legend">Rating</Typography>
                                                    <Rating name="read-only" value={row.rating.rate} readOnly />({row.rating.count})
                                                </Stack>
                                                <Typography variant="body2" >
                                                    {row.description === null ? null : row.description.slice(0, 50)}
                                                </Typography>
                                            </Box>


                                        </CardContent>
                                        <CardActions disableSpacing sx={{ justifyContent: "center", alignItems: "center", mb: 2 }}>
                                            <Button variant='contained'
                                                sx={{
                                                    borderRadius: 5,
                                                    background: "#ffa280",
                                                    '&:hover': {
                                                        backgroundColor: 'green',
                                                        color: 'white',
                                                    },
                                                }}>Buy Now</Button>
                                        </CardActions>

                                    </Card>

                                </Grid>
                            )
                        })}
                    </Grid> :
                    (<>
                        {loading ?
                            <Box sx={{ textAlign: "center", mt: 20 }}>
                                <CircularProgress thickness={5} sx={{ color: "#ffcc66" }} size={80} />
                            </Box> :
                            (<>
                                {productList.length > 0 ?
                                    <Grid container spacing={2} paddingX={2} sx={{ align: "center", justifyContent: "center" }}>
                                        {productList.filter(filterNames).map((row, index) => {
                                            return (
                                                <Grid item xs={12} sm={6} md={3} lg={3} xl={3} sx={{ my: 2 }} key={index}>
                                                    <Card sx={{ maxWidth: 345, height: { xs: "75vh", sm: "80vh", lg: "70vh" }, borderRadius: 5 }}>
                                                        <Box sx={{ textAlign: "center", my: 3 }}>
                                                            <Typography variant='subtitle2' sx={{ color: "black",fontWeight: "bold" }}>{row.title}</Typography>
                                                            <Typography variant='subtitle2' sx={{ color: "black" }}>
                                                                <span style={{ color: "#ff6933" }}>
                                                                    Price:
                                                                </span>
                                                                $ {row.price}
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ textAlign: "center" }}>
                                                            <img src={row.image} alt={row.image} style={{ height: "25vh", width: "15vw" }} />
                                                        </Box>
                                                        <CardContent>
                                                            <Box sx={{ textAlign: "center" }}>
                                                                <Stack direction="row" sx={{ justifyContent: "space-between", mb: 2 }}>
                                                                    <Typography component="legend">Rating</Typography>
                                                                    <Rating name="read-only" value={row.rating.rate} readOnly />({row.rating.count})
                                                                </Stack>
                                                                <Typography variant="body2" >
                                                                    {row.description === null ? null : row.description.slice(0, 50)}
                                                                </Typography>
                                                            </Box>


                                                        </CardContent>
                                                        <CardActions disableSpacing sx={{ justifyContent: "center", alignItems: "center", mb: 2 }}>
                                                            <Button variant='contained'
                                                                sx={{
                                                                    borderRadius: 5,
                                                                    background: "#ffa280",
                                                                    '&:hover': {
                                                                        backgroundColor: 'green',
                                                                        color: 'white',
                                                                    },
                                                                }}>Add to Cart</Button>
                                                        </CardActions>

                                                    </Card>

                                                </Grid>
                                            )
                                        })}
                                    </Grid> : <Typography variant="h6"
                                        sx={{ fontWeight: "bold", color: "darkslategray", ml: 2 }}
                                    >No Data Found
                                    </Typography>}

                            </>)}
                    </>)
                }
                
            </ThemeProvider>
        </div>
    )
}

export default ProductList;