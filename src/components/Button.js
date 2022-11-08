import React from "react";

function Button({ title, setItem }) {
  const handleClick = () => {
    setItem(title);
  };

  return <button onClick={handleClick}>{title}</button>;
}

export default Button;
