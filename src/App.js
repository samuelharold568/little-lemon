import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import chakraTheme from './config/chakraTheme';
import Header from './component/Header';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import MenuPage from './pages/MenuPage';
import DetailPage from './pages/DetailPage';
import AboutPage from './pages/AboutPage';
import Footer from './component/Footer';
import AuthPage from './pages/AuthPage';
import ProfilPages from './pages/ProfilPages';
import OnlinePage from './pages/OrderOnlinePage';
import { putAccessToken, getUserLogged } from './utils/endpoint';
import { getReservationData } from './utils/api';

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [load, setLoad] = useState(true);
  const [reservation, setReservation] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAuthedUser() {
      const { error, data } = await
      getUserLogged();

      if (error) {
        setLoad(false);
      } else {
        setAuthedUser(data);
        setLoad(false);
      }
    }

    getAuthedUser();
  }, []);

  useEffect(() => {
    function getReservationDataStorage() {
      const reservationData = getReservationData();
      setReservation(reservationData);
    }

    getReservationDataStorage();
  }, []);

  const loginHandler = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
    navigate('/');
  };

  if (load) {
    return null;
  }

  return (
    <ChakraProvider theme={chakraTheme}>
      <Header isLogin={authedUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation" element={authedUser ? <BookingPage /> : <AuthPage setAuthed={loginHandler} />} />
        <Route path="/menus" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/login" element={authedUser ? <ProfilPages name={authedUser.name} onLogout={onLogout} data={reservation} /> : <AuthPage onLogin={loginHandler} />} />
        <Route path="/online" element={<OnlinePage />} />
      </Routes>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
