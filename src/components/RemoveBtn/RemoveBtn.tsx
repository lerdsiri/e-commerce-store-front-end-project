import { useDispatch } from 'react-redux';

import { Product } from 'types';
import { cartActions } from 'store/cartSlice';
import Button from 'components/Button/Button';
import 'components/RemoveBtn/RemoveBtn.css';

export default function RemoveBtn(removedProduct: {removedProduct: Product}) {
    const removedProd = removedProduct.removedProduct;
    const dispatch = useDispatch();
    
    const handleRemove = (removedProd: Product): void => {
        dispatch(cartActions.remove({product: removedProd}));
    }
    
    return (
        <Button text="Remove" clickHandler={() => handleRemove(removedProd)} />
        /*
        <button 
            onClick={() => handleRemove(removedProd)}
            className='remove-btn'
        >
            REMOVE
        </button>
        */
    );
}