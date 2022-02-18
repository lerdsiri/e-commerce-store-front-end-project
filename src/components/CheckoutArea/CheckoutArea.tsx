export default function CheckoutArea() {
    return (
        <div>
            <form>
                <label>
                    Name:
                    <input type='text' name='name' />
                </label>
                <label>
                    Shipping address
                    <input type='text' name='address' />
                </label>
                <label>
                    Credit card number
                    <input type='text' name='creditCardNo' />
                </label>
                <label>
                    Credit card name
                    <input type='text' name='creditCardName' />
                </label>
                <label>
                    Billing address
                    <input type='text' name='billingAddress' />
                </label>
                <input type="submit" value="Checkout" />
            </form>
        </div>
    )
}
