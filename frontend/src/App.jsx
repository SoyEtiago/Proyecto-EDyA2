import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './page/register'

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
