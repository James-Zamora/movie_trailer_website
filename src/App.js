import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Main, View } from './pages'
import { Footer, Navbar } from './components'
import './style.css'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/watch/:id' element={<View/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
