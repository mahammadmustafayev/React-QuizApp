import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import './assets/css/index.css'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login  />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
