import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Packages from './components/Packages'
import NavBar from './components/NavBar';


function App() {

  const packages = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']


  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">Welcome to Monty's Mineral SPA</h1>
          <NavBar />
          <Home />
        </header>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={
            <Packages packages={packages} />
          } />
        </Routes>
      </Router>

    </div>
  );
}

export default App;





