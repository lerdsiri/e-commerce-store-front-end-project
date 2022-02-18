import CartTable from "components/CartTable/CartTable";
import CheckoutArea from "components/CheckoutArea/CheckoutArea";
import BackLink from "components/BackLink/BackLink";
import 'pages/Cart/Cart.css'


export default function Cart() {

    return (
        <div className='cart-page'>
            <CartTable />
            <CheckoutArea />
            <BackLink />
        </div>
    );
}
