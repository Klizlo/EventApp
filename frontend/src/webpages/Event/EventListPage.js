import {Box, Button, Grid} from "@mui/material";
import {Link} from "react-router-dom";
import EventListBox from "../../components/event/EventListBox";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";
import {eventService} from "../../services/eventService";

const EventListPage = () => {

    const {t} = useTranslation();

    const events = [
        {
            id: 1,
            name: "Dziunia nie jesteś moim szefem",
            type: 'Coaching',
            start_date: '02-08-2023',
            end_date: '02-08-2023',
            place: 'Dom Dziuni',
            image: "/assets/dziunia.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate neque lorem, non aliquet velit tincidunt vel. Aenean id nulla vel lacus vulputate tincidunt. Sed ullamcorper rhoncus massa, id aliquam ipsum posuere eget. Duis sit amet mauris lacinia, condimentum neque eget, condimentum arcu. Mauris id massa aliquet orci convallis vulputate id et elit. Sed dignissim nibh enim, at maximus purus vestibulum sed. Nulla arcu nisl, consectetur sed sapien in, suscipit ullamcorper libero. Nam tincidunt tincidunt turpis et laoreet. Suspendisse efficitur est vitae dui vehicula pellentesque.'
        },
        {
            id: 2,
            name: "Słuchaj Ropuch",
            type: 'Music',
            start_date: '03-23-2023',
            end_date: '03-23-2023',
            place: 'Ropuszka',
            image: "/assets/sluchaj_ropuch.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate neque lorem, non aliquet velit tincidunt vel. Aenean id nulla vel lacus vulputate tincidunt. Sed ullamcorper rhoncus massa, id aliquam ipsum posuere eget. Duis sit amet mauris lacinia, condimentum neque eget, condimentum arcu. Mauris id massa aliquet orci convallis vulputate id et elit. Sed dignissim nibh enim, at maximus purus vestibulum sed. Nulla arcu nisl, consectetur sed sapien in, suscipit ullamcorper libero. Nam tincidunt tincidunt turpis et laoreet. Suspendisse efficitur est vitae dui vehicula pellentesque.'
        },
        {
            id: 3,
            name: "Bal u Kurowej",
            type: 'Event',
            start_date: '04-28-2024',
            end_date: '04-30-2024',
            place: 'Zamek Kurowej',
            image: "/assets/bal_u_kurowej.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate neque lorem, non aliquet velit tincidunt vel. Aenean id nulla vel lacus vulputate tincidunt. Sed ullamcorper rhoncus massa, id aliquam ipsum posuere eget. Duis sit amet mauris lacinia, condimentum neque eget, condimentum arcu. Mauris id massa aliquet orci convallis vulputate id et elit. Sed dignissim nibh enim, at maximus purus vestibulum sed. Nulla arcu nisl, consectetur sed sapien in, suscipit ullamcorper libero. Nam tincidunt tincidunt turpis et laoreet. Suspendisse efficitur est vitae dui vehicula pellentesque.'
        },
        {
            id: 4,
            name: "Niech żyje zbrodniczy reżim",
            type: 'Politics',
            start_date: '03-18-2023',
            end_date: '03-18-2023',
            place: 'Szubienica',
            image: "/assets/rezim.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate neque lorem, non aliquet velit tincidunt vel. Aenean id nulla vel lacus vulputate tincidunt. Sed ullamcorper rhoncus massa, id aliquam ipsum posuere eget. Duis sit amet mauris lacinia, condimentum neque eget, condimentum arcu. Mauris id massa aliquet orci convallis vulputate id et elit. Sed dignissim nibh enim, at maximus purus vestibulum sed. Nulla arcu nisl, consectetur sed sapien in, suscipit ullamcorper libero. Nam tincidunt tincidunt turpis et laoreet. Suspendisse efficitur est vitae dui vehicula pellentesque.'
        },
        {
            id: 1,
            name: "Dziunia nie jesteś moim szefem",
            type: 'Coaching',
            start_date: '05-08-2023',
            end_date: '05-08-2023',
            place: 'Dom Dziuni',
            image: "/assets/dziunia.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate neque lorem, non aliquet velit tincidunt vel. Aenean id nulla vel lacus vulputate tincidunt. Sed ullamcorper rhoncus massa, id aliquam ipsum posuere eget. Duis sit amet mauris lacinia, condimentum neque eget, condimentum arcu. Mauris id massa aliquet orci convallis vulputate id et elit. Sed dignissim nibh enim, at maximus purus vestibulum sed. Nulla arcu nisl, consectetur sed sapien in, suscipit ullamcorper libero. Nam tincidunt tincidunt turpis et laoreet. Suspendisse efficitur est vitae dui vehicula pellentesque.'
        },
        {
            id: 2,
            name: "Słuchaj Ropuch",
            type: 'Music',
            start_date: '11-23-2023',
            end_date: '11-23-2023',
            place: 'Ropuszka',
            image: "/assets/sluchaj_ropuch.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate neque lorem, non aliquet velit tincidunt vel. Aenean id nulla vel lacus vulputate tincidunt. Sed ullamcorper rhoncus massa, id aliquam ipsum posuere eget. Duis sit amet mauris lacinia, condimentum neque eget, condimentum arcu. Mauris id massa aliquet orci convallis vulputate id et elit. Sed dignissim nibh enim, at maximus purus vestibulum sed. Nulla arcu nisl, consectetur sed sapien in, suscipit ullamcorper libero. Nam tincidunt tincidunt turpis et laoreet. Suspendisse efficitur est vitae dui vehicula pellentesque.'
        },
        {
            id: 3,
            name: "Bal u Kurowej",
            type: 'Event',
            start_date: '06-28-2024',
            end_date: '06-30-2024',
            place: 'Zamek Kurowej',
            image: "/assets/bal_u_kurowej.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate neque lorem, non aliquet velit tincidunt vel. Aenean id nulla vel lacus vulputate tincidunt. Sed ullamcorper rhoncus massa, id aliquam ipsum posuere eget. Duis sit amet mauris lacinia, condimentum neque eget, condimentum arcu. Mauris id massa aliquet orci convallis vulputate id et elit. Sed dignissim nibh enim, at maximus purus vestibulum sed. Nulla arcu nisl, consectetur sed sapien in, suscipit ullamcorper libero. Nam tincidunt tincidunt turpis et laoreet. Suspendisse efficitur est vitae dui vehicula pellentesque.'
        },
        {
            id: 4,
            name: "Niech żyje zbrodniczy reżim",
            type: 'Politics',
            start_date: '11-18-2023',
            end_date: '11-18-2023',
            place: 'Szubienica',
            image: "/assets/rezim.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate neque lorem, non aliquet velit tincidunt vel. Aenean id nulla vel lacus vulputate tincidunt. Sed ullamcorper rhoncus massa, id aliquam ipsum posuere eget. Duis sit amet mauris lacinia, condimentum neque eget, condimentum arcu. Mauris id massa aliquet orci convallis vulputate id et elit. Sed dignissim nibh enim, at maximus purus vestibulum sed. Nulla arcu nisl, consectetur sed sapien in, suscipit ullamcorper libero. Nam tincidunt tincidunt turpis et laoreet. Suspendisse efficitur est vitae dui vehicula pellentesque.'
        },
        {
            id: 1,
            name: "Dziunia nie jesteś moim szefem",
            type: 'Coaching',
            start_date: '05-08-2023',
            end_date: '05-08-2023',
            place: 'Dom Dziuni',
            image: "/assets/dziunia.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate neque lorem, non aliquet velit tincidunt vel. Aenean id nulla vel lacus vulputate tincidunt. Sed ullamcorper rhoncus massa, id aliquam ipsum posuere eget. Duis sit amet mauris lacinia, condimentum neque eget, condimentum arcu. Mauris id massa aliquet orci convallis vulputate id et elit. Sed dignissim nibh enim, at maximus purus vestibulum sed. Nulla arcu nisl, consectetur sed sapien in, suscipit ullamcorper libero. Nam tincidunt tincidunt turpis et laoreet. Suspendisse efficitur est vitae dui vehicula pellentesque.'
        },
        {
            id: 2,
            name: "Słuchaj Ropuch",
            type: 'Music',
            start_date: '11-23-2023',
            end_date: '11-23-2023',
            place: 'Ropuszka',
            image: "/assets/sluchaj_ropuch.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate neque lorem, non aliquet velit tincidunt vel. Aenean id nulla vel lacus vulputate tincidunt. Sed ullamcorper rhoncus massa, id aliquam ipsum posuere eget. Duis sit amet mauris lacinia, condimentum neque eget, condimentum arcu. Mauris id massa aliquet orci convallis vulputate id et elit. Sed dignissim nibh enim, at maximus purus vestibulum sed. Nulla arcu nisl, consectetur sed sapien in, suscipit ullamcorper libero. Nam tincidunt tincidunt turpis et laoreet. Suspendisse efficitur est vitae dui vehicula pellentesque.'
        },
        {
            id: 3,
            name: "Bal u Kurowej",
            type: 'Event',
            start_date: '06-28-2024',
            end_date: '06-30-2024',
            place: 'Zamek Kurowej',
            image: "/assets/bal_u_kurowej.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate neque lorem, non aliquet velit tincidunt vel. Aenean id nulla vel lacus vulputate tincidunt. Sed ullamcorper rhoncus massa, id aliquam ipsum posuere eget. Duis sit amet mauris lacinia, condimentum neque eget, condimentum arcu. Mauris id massa aliquet orci convallis vulputate id et elit. Sed dignissim nibh enim, at maximus purus vestibulum sed. Nulla arcu nisl, consectetur sed sapien in, suscipit ullamcorper libero. Nam tincidunt tincidunt turpis et laoreet. Suspendisse efficitur est vitae dui vehicula pellentesque.'
        },
        {
            id: 4,
            name: "Niech żyje zbrodniczy reżim",
            type: 'Politics',
            start_date: '11-18-2023',
            end_date: '11-18-2023',
            place: 'Szubienica',
            image: "/assets/rezim.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate neque lorem, non aliquet velit tincidunt vel. Aenean id nulla vel lacus vulputate tincidunt. Sed ullamcorper rhoncus massa, id aliquam ipsum posuere eget. Duis sit amet mauris lacinia, condimentum neque eget, condimentum arcu. Mauris id massa aliquet orci convallis vulputate id et elit. Sed dignissim nibh enim, at maximus purus vestibulum sed. Nulla arcu nisl, consectetur sed sapien in, suscipit ullamcorper libero. Nam tincidunt tincidunt turpis et laoreet. Suspendisse efficitur est vitae dui vehicula pellentesque.'
        },
        {
            id: 1,
            name: "Dziunia nie jesteś moim szefem",
            type: 'Coaching',
            start_date: '05-08-2023',
            end_date: '05-08-2023',
            place: 'Dom Dziuni',
            image: "/assets/dziunia.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate neque lorem, non aliquet velit tincidunt vel. Aenean id nulla vel lacus vulputate tincidunt. Sed ullamcorper rhoncus massa, id aliquam ipsum posuere eget. Duis sit amet mauris lacinia, condimentum neque eget, condimentum arcu. Mauris id massa aliquet orci convallis vulputate id et elit. Sed dignissim nibh enim, at maximus purus vestibulum sed. Nulla arcu nisl, consectetur sed sapien in, suscipit ullamcorper libero. Nam tincidunt tincidunt turpis et laoreet. Suspendisse efficitur est vitae dui vehicula pellentesque.'
        },
        {
            id: 2,
            name: "Słuchaj Ropuch",
            type: 'Music',
            start_date: '11-23-2023',
            end_date: '11-23-2023',
            place: 'Ropuszka',
            image: "/assets/sluchaj_ropuch.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate neque lorem, non aliquet velit tincidunt vel. Aenean id nulla vel lacus vulputate tincidunt. Sed ullamcorper rhoncus massa, id aliquam ipsum posuere eget. Duis sit amet mauris lacinia, condimentum neque eget, condimentum arcu. Mauris id massa aliquet orci convallis vulputate id et elit. Sed dignissim nibh enim, at maximus purus vestibulum sed. Nulla arcu nisl, consectetur sed sapien in, suscipit ullamcorper libero. Nam tincidunt tincidunt turpis et laoreet. Suspendisse efficitur est vitae dui vehicula pellentesque.'
        },
        {
            id: 3,
            name: "Bal u Kurowej",
            type: 'Event',
            start_date: '06-28-2024',
            end_date: '06-30-2024',
            place: 'Zamek Kurowej',
            image: "/assets/bal_u_kurowej.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate neque lorem, non aliquet velit tincidunt vel. Aenean id nulla vel lacus vulputate tincidunt. Sed ullamcorper rhoncus massa, id aliquam ipsum posuere eget. Duis sit amet mauris lacinia, condimentum neque eget, condimentum arcu. Mauris id massa aliquet orci convallis vulputate id et elit. Sed dignissim nibh enim, at maximus purus vestibulum sed. Nulla arcu nisl, consectetur sed sapien in, suscipit ullamcorper libero. Nam tincidunt tincidunt turpis et laoreet. Suspendisse efficitur est vitae dui vehicula pellentesque.'
        },
        {
            id: 4,
            name: "Niech żyje zbrodniczy reżim",
            type: 'Politics',
            start_date: '11-18-2023',
            end_date: '11-18-2023',
            place: 'Szubienica',
            image: "/assets/rezim.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate neque lorem, non aliquet velit tincidunt vel. Aenean id nulla vel lacus vulputate tincidunt. Sed ullamcorper rhoncus massa, id aliquam ipsum posuere eget. Duis sit amet mauris lacinia, condimentum neque eget, condimentum arcu. Mauris id massa aliquet orci convallis vulputate id et elit. Sed dignissim nibh enim, at maximus purus vestibulum sed. Nulla arcu nisl, consectetur sed sapien in, suscipit ullamcorper libero. Nam tincidunt tincidunt turpis et laoreet. Suspendisse efficitur est vitae dui vehicula pellentesque.'
        }
    ];

    useEffect(() => {
        eventService.getAllEvents()
            .then(response => console.log(response));
    }, []);

    return (
        <Box sx={{padding: "2%", pt: "80px"}}>
            <Box>
                <Button component={Link} to="/events"
                        disableRipple
                        sx={{
                            color: "text.primary", // color of my soul
                            "&.MuiButtonBase-root:hover": {
                                backgroundColor: 'transparent'
                            }
                        }}>{t("events.title")}</Button>
            </Box>
            <Grid container sx={{padding: '2% 0'}}>
                <Grid item xs={12} md={8}>
                    <EventListBox events={events}/>
                </Grid>
                <Grid item xs={12} md={4} orders={{xs: 1, md: 2}}>
                </Grid>
            </Grid>
        </Box>
    );
}

export default EventListPage;