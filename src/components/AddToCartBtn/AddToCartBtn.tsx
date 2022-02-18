import { useDispatch, useSelector } from 'react-redux';

import { Product, RootState } from 'types';
import { cartActions } from 'store/cartSlice';
import 'components/AddToCartBtn/AddToCartBtn.css';

export default function AddToCartBtn(addedProduct: {addedProduct: Product}) {
    
    const cart = useSelector((state: RootState) => state.cart.cart);
    const cartItems = cart.map((cartItem) => cartItem.title);
    const addedProd = addedProduct.addedProduct;
    
    const dispatch = useDispatch();
    const handleBuyClick = (addedProd: Product): void => {
        dispatch(cartActions.addToCart({product: addedProd}));
    }
    
    return (
        <button
            onClick={() => handleBuyClick(addedProd)}
            className={cartItems.includes(addedProd.title) ? "buy-btn inactive" : "buy-btn"}
            disabled={cartItems.includes(addedProd.title)}
        >
            Add to cart
        </button>
    );
}
