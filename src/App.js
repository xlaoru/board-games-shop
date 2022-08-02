import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import News from './components/News'
import CartWindow from './components/CartWindow';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/cart" element={<CartWindow/>}/>
        </Routes>
        {/* <Footer></Footer> */}
      </Router>
    </div>
  );
}

export default App;
