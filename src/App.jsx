import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

let arrayProductos = new Array()

function App() {
  const [productos, setProductos] = useState(0)

  const handleClick = (precio, nombre, id) => {
    setProductos(productos + 1)
    arrayProductos.push({ id: id, nombre: nombre, precio: precio })
  }

  return (
    <div className="bg-light">
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage productos={productos} handleClick={handleClick} />
          </Route>
          <Route path="/carrito">
            <CartPage productos={productos} arrayProductos={arrayProductos} />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
