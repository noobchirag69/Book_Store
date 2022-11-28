import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavbarComponent } from "./components/Navbar";
import { Store } from "./pages/Store";
import { Success } from "./pages/Success";
import { Cancel } from "./pages/Cancel";
import { CartProvider } from './scripts/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="container px-5">
          <NavbarComponent />
          <Routes>
            <Route path={'/'} element={<Store />} />
            <Route path={'/success'} element={<Success />} />
            <Route path={'/cancel'} element={<Cancel />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;