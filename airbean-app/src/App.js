import './App.css';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Landing from './views/Landing';
import Menu from './views/Menu';
import Cart from './views/Cart';
import Status from './views/Status';
import Error from './components/Error';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className="App">
      <Routes location={background || location}>
        <Route path="/" element={ <Navigate to="/landing" /> } exact />
        <Route path="/landing" element={ <Landing /> } exact />
        <Route path="/menu" element={ <Menu /> }> 
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="/status" element={ <Status /> } />
        <Route path="*" element={ <Error /> } />
      </Routes>
      
      {background && (
        <Routes>
          <Route path="cart" element={<Cart />} />
        </Routes>
      )}
    </div>
  );
}

export default App;