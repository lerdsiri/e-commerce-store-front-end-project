import { useSelector } from 'react-redux';

import { RootState } from 'types';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import 'components/ShoppingBadge/ShoppingBadge.css';

export default function ShoppingBadge() {
    const numOfItems = useSelector((state: RootState) => state.cart.numOfItems);

    return (
        <Badge badgeContent={numOfItems} color='primary' className='badge'>
            <ShoppingCartIcon color="action" />
        </Badge>
    );
}