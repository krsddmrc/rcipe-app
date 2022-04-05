import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Recipe from "./components/Recipe";
import About from "./components/About";
import Github from "./components/Github";
import Logout from "./components/Logout";
import Header from './components/Header';


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
