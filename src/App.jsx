import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { Suspense } from "react";

const homePromise = import("./Home");
const Home = React.lazy(() => homePromise);

const usersPromise = import("./Users");
const Users = React.lazy(() => usersPromise);

const aboutPromise = import("./About");
const About = React.lazy(() => aboutPromise);

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
        </header>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
