import CartTable from "components/CartTable/CartTable";
import BackLink from "components/BackLink/BackLink";
import 'pages/Cart/Cart.css'


export default function Cart() {

    return (
        <div className='cart-page'>
            <CartTable />
            <BackLink />
        </div>
    );
}
