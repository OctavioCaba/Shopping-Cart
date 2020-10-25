import React, { useState, /* useMemo, */ useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

let arrayProductos = new Array()

function App() {
  const [productos, setProductos] = useState(0)
  
  
  /*const [total, setTotal] = useState(0)

   const actions = useMemo(() => (
    {
      onSetTotal
    }
  ), [onSetTotal])

  const data = useMemo(() => (
    {
      total
    }
  ), [total]) */

  const cantidadProductos = useCallback((precio, nombre, id) => {
    setProductos(productos + 1)
    arrayProductos.push({ id: id, nombre: nombre, precio: precio })
  }, [productos])

  const calculoTotal = useCallback(arrayProductos => {
    let total = 0
    arrayProductos.map(p => {
      total += p.precio
    })
    return total
  }, [arrayProductos])

  return (
    <div className="bg-light">
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage productos={productos} cantidadProductos={cantidadProductos} />
          </Route>
          <Route path="/carrito">
            <CartPage productos={productos} arrayProductos={arrayProductos} calculoTotal={calculoTotal} cantidadProductos={cantidadProductos} />
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
