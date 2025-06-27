import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SuperSaverOffPage from "./pages/SuperSaverOffPage";
import SuperSaverOnPage from "./pages/SuperSaverOnPage";
import { useTheme } from "./ThemeContext";

function App() {
  const { setTheme } = useTheme();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <SuperSaverOffPage
              onToggle={() => {
                setTheme("supersaver-on");
                window.location.href = "/supersaver-on";
              }}
            />
          }
        />
        <Route
          path="/supersaver-on"
          element={
            <SuperSaverOnPage
              onToggle={() => {
                setTheme("supersaver-off");
                window.location.href = "/";
              }}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
