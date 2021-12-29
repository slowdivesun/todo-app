import logo from './logo.svg';
import './App.css';
import Card from './Components/card/Card';
import Older from './Components/older/Older';
import New from './Components/new/New';
import Header from './Components/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './routes/home/Home';
import NewList from './routes/newList/NewList';
import Topbar from './Components/topbar/Topbar';
import Details from './routes/details/Details';

function App() {
  return (
    <div>
      <Topbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/list/post" element={<NewList />} />
        </Routes>
        <Routes>
          <Route path="/list/:listId" element={<Details />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
