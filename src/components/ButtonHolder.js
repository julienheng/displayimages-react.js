import React from "react";
import Button from "./Button";

function ButtonHolder({ titles, setItem }) {
  return (
    <section className="w-full flex justify-center gap-2 p-2">
      {titles.map((title) => (
        <Button title={title} setItem={setItem}></Button>
      ))}
    </section>
  );
}

export default ButtonHolder;
