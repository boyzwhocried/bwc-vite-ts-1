import { useState } from "react";
import { ToggleButton } from "react-bootstrap";
import reactLogo from "./assets/react.svg";
import "./ThemeMode.css"

function ThemeMode() {
  function setDarkMode() {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
  }
  function setLightMode() {
    document.querySelector("body")?.setAttribute("data-theme", "light");
  }
    const [checked, setChecked] = useState(false);
    
    checked ? setDarkMode() : setLightMode();

  // setLightMode();
  return (
    <div>
      <ToggleButton
        id="toggle-check"
        type="checkbox"
        variant="secondary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        <div>
          <img src={reactLogo} className={checked?"moon-invert":''} alt="Moon" />
        </div>
      </ToggleButton>
    </div>
  );
}

export default ThemeMode;
