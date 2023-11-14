import './App.css';
import NavBar from "./components/navigation/NavBar";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import React, {} from "react"
import LoginPage from "./webpages/Account/LoginPage";
import SignupPage from "./webpages/Account/SignupPage";

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
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/signup" element={<SignupPage />}/>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
