import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Main, View, Search } from './pages'
import { Footer, Navbar } from './components'
import './style.css'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/watch/:type/:id' element={<View/>} />
          <Route path='/search' element={<Search/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
