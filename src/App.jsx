
import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import NotFound from './Pages/NotFound'
import Search from './Pages/Search'
import SearchResult from './Pages/SearchResult'
import Menu from './Components/Menu'
import Footer from './Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

function App() {


  return (
    <>
      <Menu />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/search' element={<Search />} />
        <Route path='/search-result' element={<SearchResult />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  )
}


export default App
