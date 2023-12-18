import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./pages/Error";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Products from "./pages/Products";
import AppLayout from "./pages/AppLayout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<p>LIst of Cities</p>} />
            <Route path="cities" element={<p>LIst of Cities</p>} />
            <Route path="countries" element={<p>LIst of Countries</p>} />
            <Route path="form" element={<p>Form</p>} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
