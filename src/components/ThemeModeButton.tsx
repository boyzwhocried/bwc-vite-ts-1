import { useState } from "react";
import { ToggleButton } from "react-bootstrap";
import { MdLightMode, MdDarkMode } from "react-icons/md";

function ThemeModeButton() {
  const [checked, setChecked] = useState(false);

  function setDarkMode() {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
  }
  function setLightMode() {
    document.querySelector("body")?.setAttribute("data-theme", "light");
  }

  checked ? setDarkMode() : setLightMode();

  return (
    <div>
      <ToggleButton
        id="toggle-check"
        type="checkbox"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
        style={{
          borderRadius: "100px",
          backgroundColor: "var(--text-dark-75-opacity)",
          backdropFilter: "blur(5px)",
          border: "none",
        }}
      >
        <div
          style={{
            color: "var(--light-gray)",
            fontSize: "24px",
          }}
        >
          {checked ? <MdDarkMode /> : <MdLightMode />}
        </div>
      </ToggleButton>
    </div>
  );
}

export default ThemeModeButton;
