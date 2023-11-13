import * as React from "react";
import {
    alpha,
    AppBar,
    Badge,
    Box, Divider, Drawer,
    IconButton,
    InputBase,
    Menu,
    MenuItem,
    styled,
    Toolbar, Tooltip,
    Typography
} from "@mui/material";

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MoreIcon from '@mui/icons-material/MoreVert';
import SitesDrawer from "./SitesDrawer";
import ProfileDrawer from "./ProfileDrawer";
import {Link} from "react-router-dom";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import FormatSizeIcon from "@mui/icons-material/FormatSize";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const drawerWidth = 240;

const NavBar = ({sites}) => {
    const [anchorProfileEl, setAnchorProfileEl] = React.useState(null);
    const [anchorVisibilityEl, setAnchorVisibilityEl] = React.useState(null);
    const [sitesDrawerOpen, setSitesDrawerOpen] = React.useState(false);
    const [profileDrawerOpen, setProfileDrawerOpen] = React.useState(false);

    const isProfileMenuOpen = Boolean(anchorProfileEl);
    const isVisibilityMenuOpen = Boolean(anchorVisibilityEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorProfileEl(event.currentTarget);
    };

    const handleProfileMenuClose = () => {
        setAnchorProfileEl(null);
    };

    const handleVisibilityMenuOpen = (event) => {
        setAnchorVisibilityEl(event.currentTarget);
    };

    const handleVisibilityMenuClose = () => {
        setAnchorVisibilityEl(null);
    };

    const renderProfileMenu = (
        <Menu
            sx={{mt: '45px'}}
            anchorEl={anchorProfileEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isProfileMenuOpen}
            onClose={handleProfileMenuClose}
        >
            <MenuItem component={Link} to="/profile" onClick={handleProfileMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>Logout</MenuItem>
        </Menu>
    );

    const renderVisibilityMenu = (
        <Menu
            sx={{mt: '45px', textAlign: "center"}}
            anchorEl={anchorVisibilityEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isVisibilityMenuOpen}
            onClose={handleVisibilityMenuClose}
        >
            <Divider>Language</Divider>
            <MenuItem>Polski</MenuItem>
            <MenuItem>English</MenuItem>
            <Divider >Text size</Divider>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: 'fit-content',
                    borderRadius: 1,
                    '& svg': {
                        m: 1.5,
                    },
                    '& hr': {
                        mx: 0.5,
                    },
                }}
            >
                <Tooltip title="Normal size" >
                    <IconButton color="inherit" >
                        <FormatSizeIcon fontSize="small"/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Large size" >
                    <IconButton color="inherit">
                        <FormatSizeIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Larger size" >
                    <IconButton color="inherit">
                        <FormatSizeIcon fontSize="large"/>
                    </IconButton>
                </Tooltip>
            </Box>
            <Divider>Mode</Divider>
            <MenuItem sx={{
                textAlign: "center"
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    borderRadius: 1,
                    '& svg': {
                        m: 1.5,
                    },
                    '& hr': {
                        mx: 0.5,
                    },
                }}>
                    <Typography>light</Typography>
                    <LightModeIcon />
                </Box>
            </MenuItem>
        </Menu>
    );

    const handleSitesDrawerToggle = () => {
        setSitesDrawerOpen(!sitesDrawerOpen);
    };

    const handleProfileDrawerToggle = () => {
        setProfileDrawerOpen(!profileDrawerOpen);
    };

    const keyPress = (e) => {
        if(e.keyCode == 13) {
            console.log(e.target.value);
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                background: "black"
            }}>
                <Toolbar>
                    <IconButton
                        onClick={handleSitesDrawerToggle}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onKeyDown={keyPress}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Tooltip title="Visibility">
                            <IconButton
                                size="large"
                                color="inherit"
                                aria-haspopup="true"
                                onClick={handleVisibilityMenuOpen}
                            >
                                <VisibilityIcon />
                                {isVisibilityMenuOpen ? <ExpandLess /> : <ExpandMore />}
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Shopping Cart">
                            <IconButton
                                size="large"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="error">
                                    <ShoppingCartIcon />
                                </Badge>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Profile">
                            <IconButton
                                size="large"
                                edge="end"
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            onClick={handleProfileDrawerToggle}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="temporary"
                open={sitesDrawerOpen}
                onClose={handleSitesDrawerToggle}
                anchor="left"
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: "black" },
                }}>
                <SitesDrawer sites={sites} handleDrawerToggle={handleSitesDrawerToggle} />
            </Drawer>
            <Drawer
                variant="temporary"
                open={profileDrawerOpen}
                onClose={handleProfileDrawerToggle}
                anchor="right"
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: "black" },
                }}>
                <ProfileDrawer handleDrawerToggle={handleProfileDrawerToggle} />
            </Drawer>
            {renderProfileMenu}
            {renderVisibilityMenu}
        </Box>
    );
}

export default NavBar;