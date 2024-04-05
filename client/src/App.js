import './App.css';
import Home from './components/Home';
import {Balance, CalendarDisplay} from './components';
import Profile from './components/Profile';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { TodoWrapper } from './components/TodoWrapper';

// TODO: emojis made my DB go boom. clean DB maybe?

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route exact path="/my-graph" element={<Home></Home>} />
          <Route exact path="/todo" element={<TodoWrapper></TodoWrapper>} />
          <Route exact path="/" element={<Profile></Profile>} />
          <Route exact path="/balance" element={<Balance></Balance>} />
          <Route exact path="/calendar" element={<CalendarDisplay></CalendarDisplay>} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
