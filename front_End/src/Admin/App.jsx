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
import Register from "../Admin/auth/Register";
import Book from "./Home/booking/Book";
import Nav from "./Home/Navication/Nav";
import Payment from "./Home/Payment/Payment";
import Customer from "./Home/Customer/Customer";
import Order from "./Home/Orders/Order";
import Review from "./Home/Review/Review";

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
      {showNav && <Nav />}

      <Routes>
        <Route path="/dashboard" element={token ? <Dash /> : <Navigate to="/" />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/book" element={token ? <Book /> : <Navigate to="/" />} />
        <Route path="/payment" element={token ? <Payment /> : <Navigate to="/" />} />
        <Route path="/customer" element={token ? <Customer /> : <Navigate to="/" />} />
        <Route path="/order" element={token ? <Order /> : <Navigate to="/" />} />
        <Route path="/reviews" element={token ? <Review /> : <Navigate to="/" />} />
        <Route path="*" element={<h1 className="text-center mt-20 text-3xl">404 Not Found</h1>} />
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