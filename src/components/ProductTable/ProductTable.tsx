import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { RootState } from "types";
import 'components/ProductTable/ProductTable.css';

export default function ProductTable() {
    const filteredProdList = useSelector((state: RootState) => state.products.filteredProdList);
    
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='header'>Product Name</TableCell>
                        <TableCell className='header'>Image</TableCell>
                        <TableCell className='header'>Category</TableCell>
                        <TableCell className='header'>Rating</TableCell>
                        <TableCell className='header'>Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredProdList.map((product) => (
                        <TableRow
                            key={product.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{product.title}</TableCell>
                            <TableCell><img src={product.image} alt="product" className="product-pic" /></TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>{product.rating.rate} from {product.rating.count} reviews</TableCell>
                            <TableCell>{product.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
