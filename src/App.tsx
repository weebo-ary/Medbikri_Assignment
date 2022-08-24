import "./App.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Launch from "./components/Launch";
import Launchpad from "./components/Launchpad";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Launch />} />
          <Route path="/launchpad" element={<Launchpad />} />
        </Routes>
        {/* <Launch /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
