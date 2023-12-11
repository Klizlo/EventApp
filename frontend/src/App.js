// import './App.css';
import NavBar from "./components/navigation/NavBar";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React, {useMemo, useState} from "react"
import LoginPage from "./webpages/Account/LoginPage";
import SignupPage from "./webpages/Account/SignupPage";
import ProfilePage from "./webpages/Account/ProfilePage";
import MainPage from "./webpages/Home/MainPage";
import EventPage from "./webpages/Event/EventPage";
import EventListPage from "./webpages/Event/EventListPage";
import CheckoutPage from "./webpages/Checkout/CheckoutPage";
import FinalPage from "./webpages/Checkout/FinalPage";
import {useTranslation} from "react-i18next";
import {Box, createTheme, ThemeProvider} from "@mui/material";
import {ColorModeContext} from "./ColorModeContext";
import TicketPickerPage from "./webpages/Tickets/TicketPickerPage";

function App() {

    const {t} = useTranslation();

    const sites = [
        {
            name: t("home.title"),
            link: "/",
        },
        {
            name: t("events.title"),
            link: "/events"
        },
        {
            name: t("contact.title"),
            link: "/contact"
        },
        {
            name: t("about.title"),
            link: "/about"
        }
    ]

    const userMode = localStorage.getItem('mode');

    const [mode, setMode] = useState(userMode !== null ? userMode : 'light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
            }
        }),
        []
    );

    const theme = useMemo(
        () => createTheme({
            palette: {
                mode,
            },
        }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        bgcolor: 'background.default',
                        color: 'text.primary',
                        minHeight: '100vh',
                        fontFamily: 'Roboto'
                    }}
                >
                    <React.StrictMode>
                        <BrowserRouter>
                            <NavBar sites={sites}/>
                            <Routes>
                                <Route path="/" element={<MainPage/>}/>
                                <Route path="/login" element={<LoginPage/>}/>
                                <Route path="/signup" element={<SignupPage/>}/>
                                <Route path="/profile" element={<ProfilePage/>}/>
                                <Route path='/events' element={<EventListPage/>}/>
                                <Route path="/events/:id" element={<EventPage/>}/>
                                <Route path='/events/:id/tickets' element={<TicketPickerPage />} />
                                <Route path='/checkout' element={<CheckoutPage/>}/>
                                <Route path='/confirmation' element={<FinalPage/>}/>
                            </Routes>
                        </BrowserRouter>
                    </React.StrictMode>
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
