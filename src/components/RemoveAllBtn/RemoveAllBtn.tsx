import { useDispatch } from 'react-redux';

import { cartActions } from 'store/cartSlice';
import Button from 'components/Button/Button';

export default function RemoveBtn() {
    
    const dispatch = useDispatch();
    const handleRemoveAll = () => {
        dispatch(cartActions.removeAll());
    }
    
    return (
        <Button text="REMOVE ALL" clickHandler={handleRemoveAll} />
    );
}