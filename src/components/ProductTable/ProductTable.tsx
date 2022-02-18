import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import SortIcon from '@mui/icons-material/Sort';

import AddToCartBtn from 'components/AddToCartBtn/AddToCartBtn';
import StarRating from 'components/StarRating/StarRating';
import { RootState } from "types";
import { productActions } from 'store/productSlice';
import 'components/ProductTable/ProductTable.css';

export default function ProductTable() {
    const dispatch = useDispatch();
    const filteredProdList = useSelector((state: RootState) => state.products.filteredProdList);
    
    const categories = [
        "all",
        "men's clothing",
        "women's clothing",
        "jewelery",
        "electronics",
    ];

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
        <Table striped bordered hover>
            <thead className='table-header'>
                <tr className='align-top'>
                    <th>Product Name</th>
                    <th>Image</th>
                    <th>
                        Category
                        <FormControl style={{minWidth: 100}}>
                            <InputLabel>Categories</InputLabel>
                            <Select onChange={handleCategorySelect}>
                                {categories.map((category) => (
                                    <MenuItem value={category}>{category}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </th>
                    <th>
                        <span>Rating </span>
                        <button onClick={handleSortByRating}>sort <SortIcon /></button>
                    </th>
                    <th>
                        <span>Price </span>
                        <button onClick={handleSortByPrice}>sort <SortIcon /></button>
                    </th>
                    <th>Add to Cart</th>
                </tr>
            </thead>
            <tbody>
                {filteredProdList.map((product) => (
                    <tr key={product.id}>
                        <td><Link to={`/details/${product.title}`}>{product.title}</Link></td>
                        <td><img src={product.image} alt="product" className="product-pic" /></td>
                        <td>{product.category}</td>
                        <td>
                            <StarRating rating={product.rating.rate} />
                            {product.rating.count} reviews
                        </td>
                        <td>{product.price.toLocaleString('en-US')} &euro;</td>
                        <td><AddToCartBtn addedProduct={product} /></td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}
