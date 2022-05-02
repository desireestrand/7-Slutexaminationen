import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import Landing from './views/Landing';
import Menu from './views/Menu';
import Status from './views/Status';
import Error from './components/Error';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Navigate to="/landing" /> } exact />
        <Route path="/landing" element={ <Landing /> } exact />
        <Route path="/menu" element={ <Menu /> } />
        <Route path="/status" element={ <Status /> } />
        <Route path="*" element={ <Error /> } />
      </Routes>
    </div>
  );
}

export default App;