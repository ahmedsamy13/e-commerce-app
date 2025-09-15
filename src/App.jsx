import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="px-4 sm:px-[5vm] md:px-[7vm] lg:px-[9vm] ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
