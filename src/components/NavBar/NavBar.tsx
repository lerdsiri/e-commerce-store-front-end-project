import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import SortIcon from '@mui/icons-material/Sort';

import { productActions } from 'store/productSlice';
import { themeActions } from 'store/themeSlice';
import logo from 'assets/images/logo.jpg';
import ShoppingBadge from 'components/ShoppingBadge/ShoppingBadge';
import 'components/NavBar/NavBar.css';
import React from 'react';

export default function NavBar() {
  const dispatch = useDispatch();

  const categories = [
    "all",
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ];
  
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(productActions.filterProducts({searchTerm: evt.target.value}));
  }

  const handleThemeSwitch = () => {
    dispatch(themeActions.changeTheme());
  }

  const handleCategorySelect = (event: any) => {
    dispatch(productActions.filterByCategory(event.target.value));
  };

  const handleSortByPrice = () => {
    dispatch(productActions.sortByPrice());
  };

  const handleSortByRating = () => {
    dispatch(productActions.sortByRating());
  };

  return (
    <nav>
      <div className='nav-row-1'>
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
      </div>
      <div className='nav-row-2'>
        <div>
          <FormControl style={{minWidth: 100}}>
            <InputLabel>Categories</InputLabel>
            <Select onChange={handleCategorySelect}>
                {categories.map((category) => (
                    <MenuItem value={category}>{category}</MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <button className='rating-sort-button' onClick={handleSortByRating}>Sort by rating<SortIcon /></button>              
        </div>
        <div>
          <button className='price-sort-button' onClick={handleSortByPrice}>Sort by price<SortIcon /></button>
        </div>
      </div>
    </nav>  
  )
}
