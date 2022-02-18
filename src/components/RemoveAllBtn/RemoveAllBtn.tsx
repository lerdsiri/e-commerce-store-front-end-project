import { useDispatch } from 'react-redux';

import { cartActions } from 'store/cartSlice';
import 'components/RemoveAllBtn/RemoveAllBtn.css';

export default function RemoveBtn() {
    
    const dispatch = useDispatch();
    const handleRemoveAll = () => {
        dispatch(cartActions.removeAll());
    }
    
    return (
        <button 
            onClick={handleRemoveAll}
            className='remove-all-btn'
        >
            REMOVE ALL
        </button>
    );
}