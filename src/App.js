import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Recipe from "./components/pages/Recipe";
import About from "./components/pages/About";
import Github from "./components/pages/Github";
import Logout from "./components/pages/Logout";
import Header from './components/pages/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>  
          <Navbar/>
        <Routes>
          <Route path="/" element={<Recipe/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Github" element={<Github/>} />
          <Route path="/Logout" element={<Logout/>} />
        </Routes>                      
      </BrowserRouter>
    </div>
  );
}

export default App;
