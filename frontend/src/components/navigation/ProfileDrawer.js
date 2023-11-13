import {
    Badge,
    Box, Collapse, Divider, IconButton,
    List, ListItem,
    ListItemButton, ListItemIcon,
    ListItemText, ListSubheader, Tooltip, Typography,
} from "@mui/material";
import * as React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from "@mui/icons-material/AccountCircle";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import LightModeIcon from '@mui/icons-material/LightMode';
import {ExpandLess, ExpandMore} from "@mui/icons-material";

const ProfileDrawer = ({handleDrawerToggle}) => {

    const [openProfileList, setOpenProfileList] = React.useState(false);
    const [openVisibilityList, setOpenVisibilityList] = React.useState(false);

    const handleProfileClick = () => {
        setOpenProfileList(!openProfileList);
    };

    const handleVisibilityClick = () => {
        setOpenVisibilityList(!openVisibilityList);
    };

    return (
    <Box sx={{ textAlign: 'center', background: "black", color: "white"}}>
        <Typography variant="h6" sx={{ my: 2 }}>
            MENU
        </Typography>
        <List sx={{
            mb: "auto",
            '& .MuiListItemIcon-root': {
                color: "white"
            }
        }}>
            {/*Profile button*/}
            <ListItemButton onClick={handleProfileClick}>
                <ListItemIcon
                    size="large"
                >
                    <AccountCircle />
                </ListItemIcon>
                <ListItemText primary="Profile" />
                {openProfileList ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openProfileList} timeout="auto" unmountOnExit >
                <List component="div" disablePadding >
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </List>
            </Collapse>
            <Divider sx={{ background: "darkgray"}}/>

            {/*Shopping cart button*/}
            <ListItemButton>
                <ListItemIcon size="large">
                    <Badge badgeContent={17} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </ListItemIcon>
                <ListItemText primary="Shoping Cart"/>
            </ListItemButton>
            <Divider sx={{ background: "darkgray"}}/>

            {/*Visibility button*/}
            <ListItemButton onClick={handleVisibilityClick}>
                <ListItemIcon size="large">
                    <VisibilityIcon />
                </ListItemIcon>
                <ListItemText primary="Visibility"/>
                {openVisibilityList ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openVisibilityList} timeout="auto" unmountOnExit >
                <List component="div" disablePadding >
                    <Divider>Language</Divider>
                    <ListItemButton>
                        <ListItemText primary="Polski" />
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText primary="English" />
                    </ListItemButton>
                    <Divider>Text size</Divider>
                    <ListItem>
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
                    </ListItem>
                    <Divider>Mode</Divider>
                    <ListItemButton>
                        <ListItemText primary="Light" />
                        <ListItemIcon>
                            <LightModeIcon />
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    </Box>
    );
};

export default ProfileDrawer;

