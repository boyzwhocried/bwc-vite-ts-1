import { motion } from "framer-motion";

import useComponentHeight from "./tools/UseComponentHeight";

import Heading from "./components/Heading";
import NavigationBar from "./components/NavigationBar";
import ThemeModeButton from "./components/ThemeModeButton";
import "./App.css";

function App() {
  const { ref, height } = useComponentHeight();
  const navbarHeight = height;

  return (
    <>
      <div className="noise-overlay" />
      <div
        className="main-wrapper"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "var(--light-gray)",
        }}
      >
        <div className="navbar-height" style={{ height: navbarHeight }} />
        <div
          ref={ref}
          className="navbar-wrapper"
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <NavigationBar />
          </motion.div>
        </div>
        <div className="content-wrapper">
          <div
            style={{
              display: "flex",
              minHeight: `calc(100vh - ${navbarHeight}px)`,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Heading />
          </div>
          <Heading />
          <Heading />
        </div>
        <div
          className="floating-theme-mode-button"
          style={{
            position: "fixed",
            bottom: 0,
            right: 0,
            padding: "1rem",
          }}
        >
          <ThemeModeButton />
        </div>
      </div>
    </>
  );
}

export default App;
