import './App.css';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Landing from './views/Landing';
import Menu from './views/Menu';
import Cart from './views/Cart';
import Status from './views/Status';
import Error from './components/Error';

function App() {
  let location = useLocation();
  let background = location.state && location.state.background;
  console.log('Bakgrund', location.state);

  return (
    <div className="App">
      <Routes location={background || location}>
        <Route exact path="/" element={ <Navigate to="/landing" /> } />
        <Route path="/landing" element={ <Landing /> } exact />
        <Route path="/menu" element={ <Menu /> } />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/status" element={ <Status /> } />
        <Route path="*" element={ <Error /> } />
      </Routes>

      {background && <Route path="/cart" children={<Cart />} />}
    </div>
  );
}

export default App;