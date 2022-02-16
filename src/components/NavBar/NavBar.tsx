import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';

import { productActions } from 'store/productSlice';
import logo from 'assets/images/logo.jpg';
import ShoppingBadge from 'components/ShoppingBadge/ShoppingBadge';
import 'components/NavBar/NavBar.css';
import React from 'react';

export default function NavBar() {
  const dispatch = useDispatch();
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(productActions.filterProducts({searchTerm: evt.target.value}));
  }

  return (
    <nav>
      <div className='logo-area'>
        <img src={logo} alt='logo' className='logo' />
        <h4>Shop and Give</h4>
      </div>
      <div className='search-bar'>
        <SearchIcon />
        <input
          id='search-term'
          type='text'
          onChange={handleChange}
          placeholder="Search"
          className='search-box'
        />
      </div>
      <div className='cart-area'>
        <Link to=''><ShoppingBadge /></Link>
      </div>
    </nav>  
  )
}
