import logo from './logo.svg';
import './App.css';
import Card from './Components/card/Card';
import Older from './Components/older/Older';
import New from './Components/new/New';
import Header from './Components/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './routes/home/Home';
import NewList from './routes/newList/NewList';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/list/post" element={<NewList />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
