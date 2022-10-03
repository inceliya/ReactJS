import { TableRow, TableCell } from "@mui/material";
import { useState } from "react";
import Button from '@mui/material/Button';

function Item({
    title,
    price,
    max,
    min = 0,
    totalQuantity,
    setTotalQuantity,
    totalPrice,
    setTotalPrice,
}) {
    const [quantity, setQuantity] = useState(min);

    const handleIncrement = (e) => {
        if (!max || quantity < max){
            setQuantity(quantity + 1);
            setTotalQuantity(totalQuantity + 1)
            setTotalPrice(totalPrice + price)
        }
    };

    const handleDecrement = (e) => {
        if (quantity > min) {
            setQuantity(quantity - 1);
            setTotalQuantity(totalQuantity - 1)
            setTotalPrice(totalPrice - price)
        }
    };

    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">{title}</TableCell>
            <TableCell align="right">{price}</TableCell>
            <TableCell align="right">
                <Button onClick={handleDecrement}>-</Button>
                {quantity}
                <Button onClick={handleIncrement}>+</Button>
            </TableCell>
            <TableCell align="right">{quantity * price}</TableCell>
        </TableRow>
    );
}

export default Item;