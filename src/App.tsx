import { motion } from "framer-motion";
import "./App.css";
import Heading from "./components/Heading";
import NavigationBar from "./components/NavigationBar";
import ThemeMode from "./ThemeMode";

function App() {
  return (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          backgroundColor:'var(--light-gray)'
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
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
        <div>
          <ThemeMode/>
          <Heading />
          <Heading />
          <Heading />
        </div>
      </div>
    </>
  );
}

export default App;
