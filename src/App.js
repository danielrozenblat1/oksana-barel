import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HebrewWrapper from './HebrewWrapper';
import FranceWrapper from './FranceWrapper';

function App() {
  return <>
   <Router>
    <Routes>

    <Route path="/" index element={<HebrewWrapper/>}/>
    <Route path="/France" index element={<FranceWrapper/>}/>
 </Routes>
 </Router>
  </>
}

export default App;
