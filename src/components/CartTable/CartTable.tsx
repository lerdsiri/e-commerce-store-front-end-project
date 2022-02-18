import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

import { Product, RootState } from 'types';
import { cartActions } from 'store/cartSlice';
import ShoppingBadge from 'components/ShoppingBadge/ShoppingBadge';
import RemoveBtn from 'components/RemoveBtn/RemoveBtn';
import RemoveAllBtn from 'components/RemoveAllBtn/RemoveAllBtn';
import 'components/CartTable/CartTable.css';

export default function CartTable() {
    const cart = useSelector((state: RootState) => state.cart.cart);
    const dispatch = useDispatch();

    const handleAddQuant = (product: Product) => {
        dispatch(cartActions.addQuantity({product: product}));
    }

    const handleReduceQuant = (product: Product) => {
        dispatch(cartActions.reduceQuantity({product: product}));
    }

    if (!cart.length) {
        return (
            <h2 className='cart-empty-text'>Cart is empty!</h2>
        )
    }

    const totalPrice = cart.map((product) => product.purchasedQuant * product.price).reduce((a,b) => a + b);

    return (
        <div className='cart-table'>
            <ShoppingBadge />
            <Table striped bordered hover className='table'>
                <thead className='table-header'>
                    <tr>
                        <th className='title-col'>Product Title</th>
                        <th>Image</th>
                        <th className='price-col'>Price</th>
                        <th className='quantity-col'>Quantity</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product) => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td><img src={product.image} alt="product" className="product-pic" /></td>
                            <td>{product.price.toLocaleString('en-US')} &euro;</td>
                            <td>
                                <button onClick={() => handleAddQuant(product)}> + </button>
                                <span className='quantity'>{product.purchasedQuant}</span>
                                <button onClick={() => handleReduceQuant(product)}> - </button>
                            </td>
                            <td>
                                <RemoveBtn removedProduct={product} />
                            </td>

                        </tr>
                    ))}
                    <tr>
                        <td></td>
                        <td></td>
                        <td><strong>Total: </strong></td>
                        <td>{totalPrice.toLocaleString('en-US')} &euro;</td>
                        <td><RemoveAllBtn /></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
