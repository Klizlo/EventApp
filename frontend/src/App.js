// import './App.css';
import NavBar from "./components/navigation/NavBar";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import React, {} from "react"
import LoginPage from "./webpages/Account/LoginPage";
import SignupPage from "./webpages/Account/SignupPage";
import ProfilePage from "./webpages/Account/ProfilePage";
import MainPage from "./webpages/Home/MainPage";
import EventPage from "./webpages/Event/EventPage";

function App() {

  const sites = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Events",
      link: "/events"
    },
    {
      name: "Contact",
      link: "/contact"
    },
    {
      name: "About",
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
              <Route path="/events/:id" element={<EventPage />} />
            </Routes>
          </BrowserRouter>
        </React.StrictMode>
    </div>
  );
}

export default App;
