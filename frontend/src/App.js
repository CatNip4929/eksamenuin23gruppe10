import "./App.css";
import NavBar from "./components/NavBar";
import Dashboard from './components/Dashboard';
import "./css/main.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import GameShop from './components/GameShop';


function App() {
      return (
        <Router>
          <div className="App">
            <NavBar />
            <Routes>
              <Route index element={<Dashboard />} />
              <Route path="/gameshop" element={<GameShop />} />
            </Routes>
          </div>
        </Router>
      );
    }
    

export default App;
