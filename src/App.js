import './App.css';
import {  BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './pages/index';
import CodeOfConduct from './components/CodeOfConduct';
import ScrollToTop from './components/ScrollToTop';
import AOSInit from './components/AOSInit';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <AOSInit />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/code' element={<CodeOfConduct />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
