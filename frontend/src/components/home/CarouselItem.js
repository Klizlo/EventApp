import {Box, Button, Container, Grid} from "@mui/material";

const CarouselItem = (props) => {
    return (
        <Container>
            <Grid container
                  component="main"
                  justifyItems="flex-start"
                  alignItems="stretch"
                  direction={{xs: 'column', md: 'row'}}
                  sx={{
                      backgroundImage: `url(${props.item.url})`,
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
                    }} >
                        <Button
                            sx={{
                                color: 'white',
                                border: 'white solid'
                            }}
                        >
                            Check it out!
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CarouselItem;