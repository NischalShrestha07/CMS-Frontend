import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import CreateBlog from './pages/CreateBlog/CreateBlog'
import Test from './pages/Test/Test'
import UseEffect from './pages/UseEffect/UseEffect'
import SingleBlog from './SingleBlog/SingleBlog'

function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/createblog' element={<CreateBlog />} />
        <Route path='/test' element={<Test />} />
        <Route path='/useEffect' element={<UseEffect />} />
        <Route path='/singleblog/:id' element={<SingleBlog />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
