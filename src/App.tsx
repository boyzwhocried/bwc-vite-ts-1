import { motion } from "framer-motion";
import "./App.css";
import Heading from "./components/Heading";
import NavigationBar from "./components/NavigationBar";
import ThemeMode from "./ThemeMode";
import useComponentHeight from "./tools/UseComponentHeight";

function App() {
  const { ref, height } = useComponentHeight();

  return (
    <>
      <div
        className="main-wrapper"
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "var(--light-gray)",
        }}
      >
        <div className="navbar-height" style={{ height: height }}></div>
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
          <div>
            {/* The height of navbar component is: {componentHeight}px */}
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
            padding: "0.5rem",
          }}
        >
          <ThemeMode />
        </div>
      </div>
    </>
  );
}

export default App;
