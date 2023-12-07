import {Box, Button} from "@mui/material";
import {Link} from "react-router-dom";
import HomeCarousel from "../../components/home/HomeCarousel";
import HomeSection from "../../components/home/HomeSection";
import {useTranslation} from "react-i18next";

const MainPage = () => {

    const { t } = useTranslation();

    const events = [
        {
            id: 1,
            name: "Dziunia nie jesteś moim szefem",
            type: 'Coaching',
            start_date: '05-08-2023',
            end_date: '05-08-2023',
            place: 'Dom Dziuni',
            image: "/assets/dziunia.jpg"
        },
        {
            id: 1,
            name: "Słuchaj Ropuch",
            type: 'Music',
            start_date: '11-23-2023',
            end_date: '11-23-2023',
            place: 'Ropuszka',
            image: "/assets/sluchaj_ropuch.jpg"
        },
        {
            id: 1,
            name: "Bal u Kurowej",
            type: 'Event',
            start_date: '06-28-2024',
            end_date: '06-30-2024',
            place: 'Zamek Kurowej',
            image: "/assets/bal_u_kurowej.jpg"
        },
        {
            id: 1,
            name: "Niech żyje zbrodniczy reżim",
            type: 'Politics',
            start_date: '03-18-2023',
            end_date: '03-18-2023',
            place: 'Szubienica',
            image: "/assets/rezim.jpg"
        }
    ];

    return (
        <Box sx={{padding: "2%", pt: "70px"}}>
            <Button component={Link} to="/"
                    disableRipple
                    sx={{
                        color: "text.primary", // color of my soul
                        "&.MuiButtonBase-root:hover": {
                            backgroundColor: 'transparent'
                        }
                    }}>{t("home.title")}</Button>
            <HomeCarousel />
            <HomeSection title={t("home.recommended")} events={events} link={"/events"}/>
        </Box>
    );
}

export default MainPage;