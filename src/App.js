import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Recipe from "./components/pages/Recipe";
import About from "./components/pages/About";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Recipe/>} />
          <Route path="/About" element={<About/>} />
        </Routes>                    
      </BrowserRouter>
    </div>
  );
}

export default App;
