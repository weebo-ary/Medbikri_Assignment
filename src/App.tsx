import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Launch from "./components/Launch";
import Launchpad from "./components/Launchpad";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Launch />} />
          <Route path="/launchpad/:id" element={<Launchpad />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
