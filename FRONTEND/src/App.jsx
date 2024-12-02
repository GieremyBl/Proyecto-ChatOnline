import { useEffect } from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Chat from "./pages/Chat";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";

function App() {
  useEffect(() => {
    document.body.classList.add('black-mode'); // Agrega la clase black-mode
    return () => document.body.classList.remove('black-mode'); // Limpia la clase si el componente se desmonta
  }, []);

  return <>
      <NavBar />
      <Container>
          <Routes>
            <Route path="/" element = {<Chat />}/>
            <Route path="/register" element = {<Register />}/>
            <Route path="/login" element = {<Login />}/>
            <Route path="*" element = {<Navigate to = "/" />}/>
          </Routes>
        </Container>
    </>;
}

export default App
