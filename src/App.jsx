
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'

function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<h1>i am from About page.</h1>} />
        <Route path='/contact' element={<h1>i am from Contact page.</h1>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
