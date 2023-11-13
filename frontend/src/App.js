import './App.css';
import NavBar from "./components/navigation/NavBar";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import React, {} from "react"

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
            <Route />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
