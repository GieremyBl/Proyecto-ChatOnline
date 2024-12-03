import { useEffect } from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Chat from "./pages/Chat";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { ChatContextProvider } from './context/ChatContext';

function App() {
  useEffect(() => {
    document.body.classList.add('black-mode'); // Agrega la clase black-mode
    return () => document.body.classList.remove('black-mode'); // Limpia la clase si el componente se desmonta
  }, []);

  const {user} = useContext(AuthContext);
  return (
      <ChatContextProvider user = {user} >
      <NavBar />
      <Container>
          <Routes>
            <Route path="/" element={user ? <Chat /> : <Login />} />
            <Route path="/register" element={user ? <Chat /> :
            <Register />} />
            <Route path="/login" element={user ? <Chat /> : <Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
    </ChatContextProvider>
  );
}

export default App
