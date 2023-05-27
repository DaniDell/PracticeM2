
import './App.css';
import { Routes, Route } from "react-router-dom";
import Users from './component/User';
import Landing from './component/Landing';
import Forms from './component/Forms';
import Detail from './component/Detail';

function App() {
  return (
    <Routes>
      
      <Route path='/' element = {<Landing/>} />

      <Route path='/LogIn' element = {<Forms/>} />

      <Route path='/home' element = {<Users/>} />

      <Route  path='/detail/:id' element={<Detail/>}/>
    
    </Routes>
  );
}

export default App;
