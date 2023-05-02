import './reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './Global';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
