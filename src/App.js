import './styles/App.css';
import {Route, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home/>} />
          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
