import './App.css';
import Home from './components/Home';
import {Balance} from './components';
import Profile from './components/Profile';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { TodoWrapper } from './components/TodoWrapper';


function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route exact path="/my-graph" element={<Home></Home>} />
          <Route exact path="/todo" element={<TodoWrapper></TodoWrapper>} />
          <Route exact path="/" element={<Profile></Profile>} />
          <Route exact path="/balance" element={<Balance></Balance>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
