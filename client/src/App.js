import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ShoppingProvider from "./context/shopping/Provider";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <ShoppingProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/detail/:id" element={<Detail />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </ShoppingProvider>
  );
}

export default App;
