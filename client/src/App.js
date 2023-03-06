import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ShoppingProvider from "./context/shopping/Provider";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <ShoppingProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detail/:id" element={<Detail />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </ShoppingProvider>
  );
}

export default App;
