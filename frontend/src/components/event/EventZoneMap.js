import {Box, Card, CardMedia, Dialog, Fab} from "@mui/material";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {useState} from "react";

const EventZoneMap = () => {
    const [openModal, setOpenModal] = useState(false);

    function handleClose() {
        setOpenModal(false);
    }

    function handleOpen() {
        setOpenModal(true);
    }

    return (
        <Box sx={{
            position: 'static'
        }}>
            <Box sx={{
                position: 'relative'
            }}>
                <Card sx={{width: '100%'}}>
                    <CardMedia component='img' image='/assets/stadium.png' height='400'/>
                </Card>
                <Fab size='small' sx={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    backgroundColor: 'inherit'
                }} onClick={handleOpen}>
                    <OpenInFullIcon/>
                </Fab>
            </Box>
            <Dialog
                open={openModal}
                fullScreen
                fullWidth
                onClose={handleClose}>
                <Box sx={{
                    position: 'relative'
                }}>
                    <Card>
                        <CardMedia component='img' image='/assets/stadium.png' sx={{
                            maxHeight: '100vh'
                        }}/>
                    </Card>
                    <Fab size='small' sx={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        backgroundColor: 'inherit'
                    }} onClick={handleClose}>
                        <CloseFullscreenIcon/>
                    </Fab>
                </Box>
            </Dialog>
        </Box>
    );
}

export default EventZoneMap;