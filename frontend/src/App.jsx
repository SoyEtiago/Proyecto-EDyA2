import React, { useState } from 'react';
import Login from './page/Login';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h1>Bienvenido, has iniciado sesión correctamente!</h1>
      ) : (
        <Login onLogin={setIsLoggedIn} />
      )}

    </div>
  );
}

export default App;
