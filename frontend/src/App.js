// import './App.css';
import NavBar from "./components/navigation/NavBar";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import React, {} from "react"
import LoginPage from "./webpages/Account/LoginPage";
import SignupPage from "./webpages/Account/SignupPage";
import ProfilePage from "./webpages/Account/ProfilePage";
import MainPage from "./webpages/Home/MainPage";
import EventPage from "./webpages/Event/EventPage";
import EventListPage from "./webpages/Event/EventListPage";
import CheckoutPage from "./webpages/Checkout/CheckoutPage";
import FinalPage from "./webpages/Checkout/FinalPage";
import {useTranslation} from "react-i18next";

function App() {

  const { t } = useTranslation();

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



  return (
    <div className="App">
        <React.StrictMode>
          <BrowserRouter>
            <NavBar sites={sites}/>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path='/events' element={<EventListPage />} />
              <Route path="/events/:id" element={<EventPage />} />
              <Route path='/checkout' element={<CheckoutPage />} />
              <Route path='/confirmation' element={<FinalPage />} />
            </Routes>
          </BrowserRouter>
        </React.StrictMode>
    </div>
  );
}

export default App;
