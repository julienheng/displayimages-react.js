import React, { useState } from "react";
import Gallery from "./components/Gallery";
import ButtonHolder from "./components/ButtonHolder";

const TITLES = ["Mountain", "Beaches", "Birds", "Food"];

function App() {
  const [item, setItem] = useState("Mountain");

  return (
    <div className="h-screen flex flex-col items-center">
      <div className="m-auto">
        <ButtonHolder titles={TITLES} setItem={setItem} item={item} />
        {item && <Gallery item={item} />}
      </div>
    </div>
  );
}

export default App;
