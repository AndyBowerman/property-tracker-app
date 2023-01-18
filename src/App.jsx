import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import CreateUser from './pages/CreateUser/CreateUser';
import Home from './pages/Home/Home';
import ForSale from "./pages/ForSale/ForSale";
import ForRent from "./pages/ForRent/ForRent";
import AddProperty from "./pages/AddProperty/AddProperty";
import './App.scss';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/create-user" element={<CreateUser />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/for-sale" element={<ForSale />}></Route>
        <Route path="/for-rent" element={<ForRent />}></Route>
        <Route path="/add-property" element={<AddProperty />}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
