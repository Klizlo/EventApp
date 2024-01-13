import {Box, Button, Container, Grid} from "@mui/material";
import {useTranslation} from "react-i18next";

const CarouselItem = (props) => {

    const {t} = useTranslation();

    return (
        <Container>
            <Grid container
                  component="main"
                  justifyItems="flex-start"
                  alignItems="stretch"
                  direction={{xs: 'column', md: 'row'}}
                  sx={{
                      backgroundImage: `url(${props.item.pictures})`,
                      backgroundSize: 'cover',
                      height: '300px'
                  }}
            >
                <Grid item xs={9} sm={9} md={9}>
                </Grid>
                <Grid item xs={3} sm={3} md={3}>
                    <Box
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        sx={{
                            backgroundColor: 'black',
                            opacity: '70%',
                            height: '100%',
                            width: "100%",
                        }}>
                        <Button
                            sx={{
                                color: 'white',
                                border: 'white solid'
                            }}
                        >
                            {t("home.carousel.checkout")}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CarouselItem;