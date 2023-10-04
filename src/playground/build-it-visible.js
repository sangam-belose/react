import React from "react";
import { useState } from "react";

export function Visiblity() {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      {visible ? <div>Visiblity</div> : null}

      <button onClick={toggleVisibility}>
        {visible ? "Hide Details" : "show details"}
      </button>
    </div>
  );
}
