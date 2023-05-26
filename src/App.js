
import './App.css';
import { Routes, Route } from "react-router-dom";
import Users from './component/User';

function App() {
  return (
    <Routes>
      
      <Route path='/home' element = {<Users/>} />
    
    </Routes>
  );
}

export default App;
