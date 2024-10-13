import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import Login from './page/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
      </Routes>
      {isLoggedIn && <h1>Bienvenido, has iniciado sesión correctamente!</h1>}
    </Router>
  );
}

export default App;
