import {Box, Button} from "@mui/material";
import {Link} from "react-router-dom";
import HomeCarousel from "../../components/home/HomeCarousel";
import HomeSection from "../../components/home/HomeSection";
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {eventService} from "../../services/eventService";
import HomeCarouselSkeleton from "../../components/home/HomeCarouselSkeleton";
import EventHomeSectionSkeleton from "../../components/home/EventHomeSectionSkeleton";

const MainPage = () => {

    const {t} = useTranslation();

    const [events, setEvents] = useState(null);

    useEffect(() => {
        eventService.getAllEvents()
            .then(response => {
                console.log(response);
                setEvents(response);
            })
    }, []);

    return (
        <Box sx={{padding: "2%", pt: "80px"}}>
            <Button component={Link} to="/"
                    disableRipple
                    sx={{
                        color: "text.primary", // color of my soul
                        "&.MuiButtonBase-root:hover": {
                            backgroundColor: 'transparent'
                        }
                    }}>{t("home.title")}</Button>
            {events !== null ? (<HomeCarousel events={events.filter(event => event.start_date).slice(0, 2)}/>) : (<HomeCarouselSkeleton />)}
            {events !== null ? (<HomeSection title={t("home.recommended")} events={events} link={"/events"}/>) : (<EventHomeSectionSkeleton />)}
        </Box>
    );
}

export default MainPage;