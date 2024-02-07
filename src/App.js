
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './Components/Home/home';
import Login from './Components/Login/login';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/sign' element={<SignUp/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
