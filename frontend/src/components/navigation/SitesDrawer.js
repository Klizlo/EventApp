import {Box, Divider, List, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";
import * as React from "react";
import {Link} from "react-router-dom";

const SitesDrawer = ({sites, handleDrawerToggle}) => {
    return (
        <Box sx={{textAlign: 'center', background: "black", color: "white"}}>
            <Typography variant="h6" sx={{
                fontFamily: 'Whisper',
                fontSize: '45px',
                my: 2
            }}>
                KucBilet
            </Typography>
            <Divider/>
            <List>
                {sites.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton component={Link} to={item.link} onClick={handleDrawerToggle}
                                        sx={{textAlign: 'center'}}>
                            <ListItemText primary={item.name}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default SitesDrawer;

