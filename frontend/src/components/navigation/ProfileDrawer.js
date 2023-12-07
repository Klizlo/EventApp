import {
    Badge,
    Box, Collapse, Divider, IconButton,
    List, ListItem,
    ListItemButton, ListItemIcon,
    ListItemText, Tooltip, Typography,
} from "@mui/material";
import * as React from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from "@mui/icons-material/AccountCircle";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import LightModeIcon from '@mui/icons-material/LightMode';
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {useTranslation} from "react-i18next";

const ProfileDrawer = ({changeLanguage}) => {

    const { t } = useTranslation();

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
                <ListItemText primary={t("navBar.account.profile")} />
                {openProfileList ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openProfileList} timeout="auto" unmountOnExit >
                <List component="div" disablePadding >
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary={t("navBar.account.profile")} />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemText primary={t("navBar.account.logout")} />
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
                <ListItemText primary={t("navBar.shoppingCart")}/>
            </ListItemButton>
            <Divider sx={{ background: "darkgray"}}/>

            {/*Visibility button*/}
            <ListItemButton onClick={handleVisibilityClick}>
                <ListItemIcon size="large">
                    <VisibilityIcon />
                </ListItemIcon>
                <ListItemText primary={t("navBar.visibility.name")}/>
                {openVisibilityList ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openVisibilityList} timeout="auto" unmountOnExit >
                <List component="div" disablePadding >
                    <Divider>{t("navBar.visibility.language")}</Divider>
                    <ListItemButton onClick={() => changeLanguage("pl")}>
                        <ListItemText primary="Polski" />
                    </ListItemButton>
                    <ListItemButton onClick={() => changeLanguage("en")}>
                        <ListItemText primary="English" />
                    </ListItemButton>
                    <Divider>{t("navBar.visibility.text.name")}</Divider>
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
                            <Tooltip title={t("navBar.visibility.text.normal")} >
                                <IconButton color="inherit" >
                                    <FormatSizeIcon fontSize="small"/>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={t("navBar.visibility.text.large")} >
                                <IconButton color="inherit">
                                    <FormatSizeIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title={t("navBar.visibility.text.larger")} >
                                <IconButton color="inherit">
                                    <FormatSizeIcon fontSize="large"/>
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </ListItem>
                    <Divider>{t("navBar.visibility.mode.name")}</Divider>
                    <ListItemButton>
                        <ListItemText primary={t("navBar.visibility.mode.light")} />
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

