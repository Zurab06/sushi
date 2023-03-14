import './App.css';
import Basket from './pages/Basket/Basket';
import { Routes, Route, Link } from 'react-router-dom';
import Sets from './pages/Sets/Sets';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import PersonalData from './pages/PersonalData/PersonalData';

function App() {
  return (
    <>
      <Header />
      <PersonalData />

      {/* <Link to="/sets">Sets</Link>
      <Link to="/basket">Basket</Link>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sets" element={<Sets />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer /> */}
    </>
  );
}

export default App;
