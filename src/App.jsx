import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import CreateUser from './pages/CreateUser/CreateUser';
import Home from './pages/Home/Home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/create-user" element={<CreateUser />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
