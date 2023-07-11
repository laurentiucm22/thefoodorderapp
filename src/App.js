import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  return (
    <>
      {cartIsShown && <Cart />}

      <Header />

      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
