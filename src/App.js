import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="nav-container">
          <button className="nav-button">
            <Link to="/">Home</Link>
          </button>
          <button className="nav-button">
            <Link to="/main">Main</Link>
          </button>
          <button className="nav-button">
            <Link to="/profile">Profile</Link>
          </button>
        </div>
        <div className="route-container">
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/main" element={<h1>Main</h1>} />
            <Route path="/profile" element={<h1>Profile</h1>} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

const Home = () => <h1>Home</h1>;
const Main = () => <h1>Main</h1>;
const Profile = () => <h1>Profile</h1>;
const NotFound = () => <h1>404 Not Found</h1>;

export default App;
