import React, { useState } from 'react';
import {
    AppBar,
    Box,
    CssBaseline,
    Button,
    Typography,
    Toolbar,
    ListItemText,
    ListItemButton,
    ListItem,
    IconButton,
    List,
    Divider,
    Drawer
} from '@mui/material';
import { Menu, Person, ShoppingCart } from '@mui/icons-material';

const drawerWidth = 240;
const navItems = [' Best Seller', 'Gift Ideas', 'New Releases', "Today's Deals", "Customer Service"];

function NavBar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h5" sx={{ py: 2, fontWeight: "bold", background: "#333333", color: "white" }}>
                Eflyer
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" elevation={0} sx={{ background: "#333333" }}  >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <Menu />
                    </IconButton>
                    <Box sx={{ ml: "auto", display: { sm: 'none' } }}>
                        <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{
                            mx: 3,
                            color: "white",
                            borderRadius: 1,
                            width: 40,
                            height: 32,
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                        }}
                    >
                        <ShoppingCart fontSize="small" />
                        <Typography variant='body2' sx={{ color: "white", fontWeight: "bold", ml: 1 }}>Cart</Typography>
                    </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{
                                mx: 5,
                                color: "white",
                                borderRadius: 1,
                                width: 40,
                                height: 32,
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                },
                            }}
                        >
                            <Person fontSize="small" />
                            <Typography variant='body2' sx={{ color: "white", fontWeight: "bold" }}>Pradeep</Typography>
                        </IconButton>
                    </Box>

                    <Box sx={{ display: { xs: 'none', sm: 'block' }, mx: "auto" }}>
                        {navItems.map((item) => (
                            <Button key={item}
                                sx={{
                                    color: '#fff',
                                    textTransform: "none",
                                    ml: 2,
                                    borderRadius: 5,
                                    '&:hover': {
                                        backgroundColor: 'green',
                                        color: 'white',
                                    },
                                }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}



export default NavBar;