//import { useState } from 'react';
//import Login from './page/Login';
//import HomePage from './page/HomePage';
import Informacion from './page/infoEvento';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div>
      <Informacion/>
    </div>
  );
}
//const [isLoggedIn, setIsLoggedIn] = useState(false);
//{isLoggedIn ? (
//  <h1>Bienvenido, has iniciado sesión correctamente!</h1>
//) : (
//  <Login onLogin={setIsLoggedIn} />
//)}


export default App;
