import * as React from 'react';
import Table from '@mui/material/Table';
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import Item from './Item'
import { useState, useEffect } from 'react';

const products = [
    { id: 1, name: "Product 1", price: 100, min: 1, max: 5 },
    { id: 2, name: "Product 2", price: 150, max: 3 },
    { id: 3, name: "Product 3", price: 300 },
];

function Cart(props) {
    const [totalQuantity, setTotalQuantity] = useState();
    const [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        let quantitySum = 0;
        products.map(p => quantitySum += (p.min ?? 0));
        setTotalQuantity(quantitySum);

        let priceSum = 0;
        products.map(p => priceSum += p.price * (p.min ?? 0));
        setTotalPrice(priceSum);
    }, [products]);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((p) =>
                        <Item
                            title={p.title}
                            price={p.price}
                            min={p.min}
                            max={p.max}
                            totalQuantity={totalQuantity}
                            setTotalQuantity={setTotalQuantity}
                            totalPrice={totalPrice}
                            setTotalPrice={setTotalPrice} />
                    )}
                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row" colSpan={2}>
                            Total
                        </TableCell>
                        <TableCell align="right">{totalQuantity}</TableCell>
                        <TableCell align="right">{totalPrice}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Cart;
