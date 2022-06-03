import { useDispatch } from 'react-redux';

import { Product } from 'types';
import { cartActions } from 'store/cartSlice';
import Button from 'components/Button/Button';

export default function AddToCartBtn(addedProduct: {addedProduct: Product}) {
    const addedProd = addedProduct.addedProduct;
    
    const dispatch = useDispatch();
    const handleBuyClick = (addedProd: Product): void => {
        dispatch(cartActions.addToCart({product: addedProd}));
    }
    
    return (
        <Button text="Add to cart" clickHandler={() => handleBuyClick(addedProd)} />  
    );
}
