import './reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import NuevoVideo from './pages/NuevoVideo';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='nuevoVideo' element={<NuevoVideo/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
