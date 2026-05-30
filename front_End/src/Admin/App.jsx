import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Dash from "./Home/Dashboard/Dash";
import Login from "../Admin/auth/Login";
// import Register from "../Admin/auth/Register";
import Book from "./Home/booking/Book";
import Nav from "./Home/Navication/Nav";
import Payment from "./Home/Payment/Payment";
import Customer from "./Home/Customer/Customer";
import Order from "./Home/Orders/Order";
import Review from "./Home/Review/Review";

import Navigation from "../Brandax/Navigate/Navigation";
import Hero from "../Brandax/Hero/Hero";
import SocialMedia from "../Brandax/Components/Socialmedia/SocialMedia";
import ContentMarketing from "../Brandax/Components/ContentMarketing/ContentMarketing";
import EmailMarketing from "../Brandax/Components/EmailMarketing/EmailMarketing";
import Online from "../Brandax/Components/OnlineAdvertising/Online";
import Google from "../Brandax/Components/GoogleAds/Google";
import Influencer from "../Brandax/Components/InfluencerMarketing/Influencer";
import OnlineReputation from "../Brandax/Components/OnlineReputation/OnlineReputation";
import VideoMarketing from "../Brandax/Components/VideoMarketing/VideoMarketing";


function Layout() {
  const location = useLocation();

  const showNav =
    location.pathname === "/dashboard" ||
    location.pathname === "/book" ||
    location.pathname === "/payment" ||
    location.pathname === "/customer" ||
    location.pathname === "/order" ||
    location.pathname === "/reviews";
  
    
const token = localStorage.getItem("token");

  return (
    <>
      {showNav===true? <Nav /> : <Navigation/>}

      <Routes>
        <Route path="/dashboard" element={token ? <Dash /> : <Navigate to="/Login" />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/signup" element={<Register />} /> */}
        <Route path="/book" element={token ? <Book /> : <Navigate to="/" />} />
        <Route path="/payment" element={token ? <Payment /> : <Navigate to="/" />} />
        <Route path="/customer" element={token ? <Customer /> : <Navigate to="/" />} />
        <Route path="/order" element={token ? <Order /> : <Navigate to="/" />} />
        <Route path="/reviews" element={token ? <Review /> : <Navigate to="/" />} />
        <Route path="*" element={<h1 className="text-center mt-20 text-3xl">404 Not Found</h1>} />
        {/* ............................................................Under section for user page................................... */}
        <Route path="/" element={<Hero/>}/>
        <Route path="/Socialmedia" element={<SocialMedia/>}/>
        <Route path="/ContentMarketing" element={<ContentMarketing/>}/>
        <Route path="/EmailMarketing" element={<EmailMarketing/>}/>
        <Route path="/OnlineAdvertising" element={<Online/>}/>
        <Route path="/GoogleAds" element={<Google/>}/>
        <Route path="/InfluencerMarketing" element={<Influencer/>}/>
        <Route path="/OnlineReputation" element={<OnlineReputation/>}/>
        <Route path="/VideoMarketing" element={<VideoMarketing/>}/>
      </Routes>
    </>
  );
}

function App() {
  return (
    <div className="sm:flex bg-black text-white font-Nunito w-full hidden flex-col">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;