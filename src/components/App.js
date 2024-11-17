import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items] = useState(itemData);
  const [darkModeEnabled, toggleDarkMode] = useState(false);

  function handleToggleMode() {
    toggleDarkMode((currentMode) => !currentMode);
  }

  const appClass = darkModeEnabled ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggleMode}>
          {darkModeEnabled ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
