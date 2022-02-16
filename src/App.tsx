import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import { productActions } from "store/productSlice";
import Home from 'pages/Home/Home';
import 'App.css';

function App() {

  const dispatch = useDispatch();

    useEffect( () => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => dispatch(productActions.getProducts({products: data})));
    }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
