import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

let i = 1

function App() {
  const [productos, setProductos] = useState(0)
  const [arrayProductos, setArrayProductos] = useState([])

  const agregarProducto = useCallback((precio, nombre) => {
    console.log(i)
    arrayProductos.push({ id: i, nombre: nombre, precio: precio })
    setArrayProductos(arrayProductos)
    setProductos(arrayProductos.length)
    i++
  }, [productos])

  const eliminarProducto = useCallback((arrayProductos, pId) => {
    const nuevoArrayProductos = [...arrayProductos].filter(q => q.id !== pId)
    setArrayProductos(nuevoArrayProductos)
    setProductos(nuevoArrayProductos.length)
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
          <Route exact path="/carrito">
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
