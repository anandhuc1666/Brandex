import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

// Admin
import Dash from "./Home/Dashboard/Dash";
import Login from "../Admin/auth/Login";
import Book from "./Home/booking/Book";
import Payment from "./Home/Payment/Payment";
import Customer from "./Home/Customer/Customer";
import Order from "./Home/Orders/Order";
import Review from "./Home/Review/Review";

// Navigation
import Nav from "./Home/Navication/Nav";
import Navigation from "../Brandax/Navigate/Navigation";

// Website Pages
import Hero from "../Brandax/Hero/Hero";
import SocialMedia from "../Brandax/Components/Socialmedia/SocialMedia";
import ContentMarketing from "../Brandax/Components/ContentMarketing/ContentMarketing";
import EmailMarketing from "../Brandax/Components/EmailMarketing/EmailMarketing";
import Online from "../Brandax/Components/OnlineAdvertising/Online";
import Google from "../Brandax/Components/GoogleAds/Google";
import Influencer from "../Brandax/Components/InfluencerMarketing/Influencer";
import OnlineReputation from "../Brandax/Components/OnlineReputation/OnlineReputation";
import VideoMarketing from "../Brandax/Components/VideoMarketing/VideoMarketing";
import ProtectedRoute from "./ProtectedRoute";
import PageNoteFind from "../Brandax/error/PageNoteFind";
import Loader from "../Brandax/Loading/Loader";
import { useEffect, useState } from "react";
import Booking from "../Brandax/Components/Booking/Booking";
import CustomApplication from "../Brandax/Components/CustomeApp/CustomApplication"

function Layout() {
  const location = useLocation();

  const adminRoutes = [
    "/dashboard",
    "/book",
    "/payment",
    "/customer",
    "/order",
    "/reviews",
  ];

  const hideNavbarRoutes = ["/login"];

  const isAdminRoute = adminRoutes.includes(location.pathname);
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);
const [loading, setLoading] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 2000); // 2 seconds

  return () => clearTimeout(timer);
}, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      {!hideNavbar && (isAdminRoute ? <Nav /> : <Navigation />)}

      <Routes>
        {/* Website Routes */}
        <Route path="/" element={<Hero />} />
        <Route path="/socialmedia" element={<SocialMedia />} />
        <Route path="/contentmarketing" element={<ContentMarketing />} />
        <Route path="/emailmarketing" element={<EmailMarketing />} />
        <Route path="/onlineadvertising" element={<Online />} />
        <Route path="/google-ads" element={<Google />} />
        <Route path="/influencer-marketing" element={<Influencer />} />
        <Route path="/online-reputation" element={<OnlineReputation />} />
        <Route path="/video-marketing" element={<VideoMarketing />} />
        <Route path="/Booking" element={<Booking/>}/>
        <Route path="/CustomApplication" element={<CustomApplication/>}/>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Protected Admin Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dash />
            </ProtectedRoute>
          }
        />

        <Route
          path="/book"
          element={
            <ProtectedRoute>
              <Book />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />

        <Route
          path="/customer"
          element={
            <ProtectedRoute>
              <Customer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/order"
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />

        <Route
          path="/reviews"
          element={
            <ProtectedRoute>
              <Review />
            </ProtectedRoute>
          }
        />
        <Route path="/loader" element={<Loader />} />

        {/* 404 Page */}
        <Route
          path="*"
          element={
           <PageNoteFind/>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="font-Nunito min-h-screen">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;