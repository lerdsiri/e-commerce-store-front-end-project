import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import AddToCartBtn from 'components/AddToCartBtn/AddToCartBtn';
import StarRating from 'components/StarRating/StarRating';
import { RootState } from "types";
import 'components/ProductTable/ProductTable.css';

export default function ProductTable() {
    const filteredProdList = useSelector((state: RootState) => state.products.filteredProdList);

    return (
        <div className='product-display-area'>
            {filteredProdList.map((product) => (
                <Card className='product-card' style={{ width: '18rem' }} key={product.id}>
                    <Card.Img variant="top" src={product.image} alt="product" className="product-pic" />
                    <Card.Body>
                        <Card.Title><Link to={`/details/${product.title}`}>{product.title}</Link></Card.Title>
                        <Card.Text>
                            {product.category}<br />
                            {product.price.toLocaleString('en-US')} &euro;<br />
                            <StarRating rating={product.rating.rate} />
                            {product.rating.count} reviews
                        </Card.Text>
                        <AddToCartBtn addedProduct={product} />
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}
