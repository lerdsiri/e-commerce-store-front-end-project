import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import { RootState } from 'types';
import { productActions } from 'store/productSlice';
import Home from 'pages/Home/Home';
import ProductDetails from 'pages/ProductDetails/ProductDetails';
import Cart from 'pages/Cart/Cart';
import 'App.css';

function App() {

  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect( () => {
      fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => dispatch(productActions.getProducts({products: data})));
  }, [dispatch]);

  return (
    <div data-theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:title' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
