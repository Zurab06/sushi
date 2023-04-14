import './App.css';
import Basket from './pages/Basket/Basket';
import { Routes, Route, Link } from 'react-router-dom';
import Sets from './pages/Sets/Sets';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import PersonalData from './pages/PersonalData/PersonalData';
import Login from './pages/auth/AuthPage';
import Registr from './pages/auth/registration/Registr';
//update
function App() {
  return (
    <>
      <Header />

      <Link to="/sets">Sets</Link>
      <Link to="/basket">Basket</Link>
      <Link to="/">Main</Link>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sets" element={<Sets />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/login" element={<Login />} />
        <Route path="/PersonalData" element={<PersonalData />} />
        <Route path="/registration" element={<Registr />} />
      </Routes>


      {/* <Footer /> */}


    </>
  );
}

export default App;
