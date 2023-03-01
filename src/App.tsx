
import './App.css';
import Basket from './pages/Basket/Basket';
// import MainPage from './pages/MainPage/MainPage';
// import Sets from './pages/Sets/Sets';
import { Routes, Route, Link } from "react-router-dom";
import Sets from './pages/Sets/Sets';


function App() {
  return (
    <>
      <Link to="/sets">Sets</Link>
      <Link to="/basket">Basket</Link>

      <Routes>
        <Route path="/sets" element={<Sets />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </>
  );
}

export default App;
