import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { HomeScreen } from "./components/screens/HomeScreen";
import { MenuScreen } from "./components/screens/MenuScreen";
import { StoryScreen } from "./components/screens/StoryScreen";
import { ReserveFlow } from "./components/screens/ReserveFlow";
import { OrderSuccessScreen } from "./components/screens/OrderSuccessScreen";
import { CartDrawer } from "./components/CartDrawer";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#faf7f2] overflow-x-auto">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/menu" element={<MenuScreen onOpenCart={() => setCartOpen(true)} />} />
          <Route path="/story" element={<StoryScreen />} />
          <Route path="/reserve" element={<ReserveFlow />} />
          <Route path="/order/success" element={<OrderSuccessScreen />} />
          <Route path="*" element={<HomeScreen />} />
        </Routes>
        <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </BrowserRouter>
  );
}
