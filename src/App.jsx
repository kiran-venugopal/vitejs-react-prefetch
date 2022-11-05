import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import { Suspense } from "react";

const Home = React.lazy(() => import("./Home"));
const Users = React.lazy(() => import("./Users"));
const About = React.lazy(() => import("./Users"));

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
