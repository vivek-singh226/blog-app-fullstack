import { Route , Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';

function App() {
  return (
    
    <div className='App'>
      <Routes>
      <Route path ='/' element={<Navigate to = '/login'/>} />
        <Route path ='/login' element={<Login />} />
        <Route path ='/signup' element={<Signup />} />
        <Route path ='/home' element={<Home />} />
      </Routes>
    </div>
    
  )
}

export default App;
