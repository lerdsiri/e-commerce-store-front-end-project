import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ShoppingBadge() {
    // const cart = useSelector((state: RootState) => state.cartReducer.cart);
  
    return (
        <Badge badgeContent={4} color="primary">
        <ShoppingCartIcon color="action" />
        </Badge>
    );
}