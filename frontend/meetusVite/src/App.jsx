import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' text-white h-[100vh] flex justify-center items-center bg-cover' style={{"backgroundImage": "url('../src/assets/bg.jgp"}}>
    <Routes>
      <Route path='login' element={ <Login/>}/>
    </Routes>
    </div>
       
  )
}

export default App
