import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import BackLink from 'components/BackLink/BackLink';
import { RootState } from "types";
import 'components/ProductDetailCard/ProductDetailCard.css';

export default function ProductDetailCard(title: {title: string | undefined} ) {
    const filteredProdList = useSelector((state: RootState) => state.products.filteredProdList);
    let product = filteredProdList.filter((product) => product.title === title.title)[0];
    
    return (
        <div>
            <Card sx={{ maxWidth: 345 }} className='info-card'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={product?.image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.category}
                        </Typography>
                        <br />
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                        <br />
                        <Typography variant="body2" color="text.secondary">
                            Rating: {product.rating.rate} out of {product.rating.count} reviews
                        </Typography>
                        <br />
                        <Typography variant="body2" color="text.secondary">
                            Price: {product.price} &euro;
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <BackLink />
        </div>
    )
}
