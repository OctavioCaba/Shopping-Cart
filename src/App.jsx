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

  const agregarProducto = useCallback((precio, nombre, id) => {
    arrayProductos.push({ id: id, nombre: nombre, precio: precio })
    setProductos(arrayProductos.length)
  }, [productos])

  const eliminarProducto = useCallback(arrayProductos => {
    setProductos(arrayProductos.length)
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
            <MainPage productos={productos} agregarProducto={agregarProducto} />
          </Route>
          <Route path="/carrito">
            <CartPage
              productos={productos}
              arrayProductos={arrayProductos}
              calculoTotal={calculoTotal}
              eliminarProducto={eliminarProducto}
            />
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
