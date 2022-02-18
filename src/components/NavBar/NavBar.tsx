import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';

import { productActions } from 'store/productSlice';
import { themeActions } from 'store/themeSlice';
import logo from 'assets/images/logo.jpg';
import ShoppingBadge from 'components/ShoppingBadge/ShoppingBadge';
import 'components/NavBar/NavBar.css';
import React from 'react';

export default function NavBar() {
  const dispatch = useDispatch();
  
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(productActions.filterProducts({searchTerm: evt.target.value}));
  }

  const handleThemeSwitch = () => {
    dispatch(themeActions.changeTheme());
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
      <div>
      <Form onChange={handleThemeSwitch} className='switch'>
        <Form.Check
          type='switch'
          id='switch1'
          label='Aquamarine/Blue Mode'
        />
      </Form>
      </div>
      <div className='cart-area'>
        <Link to='/cart'><ShoppingBadge /></Link>
      </div>
    </nav>  
  )
}
