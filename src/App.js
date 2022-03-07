import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Main } from './pages'
import { Header, Navbar } from './components'
import './style.css'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
