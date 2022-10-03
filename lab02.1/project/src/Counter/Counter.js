import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';

function Counter({ value = 0, max = 10, min = -10 }) {
    const [currentValue, setCurrentValue] = useState(value);

    const handleIncrement = (e) => {
        if (currentValue < max)
            setCurrentValue(currentValue + 1);
    };

    const handleDecrement = (e) => {
        if (currentValue > min)
            setCurrentValue(currentValue - 1);
    };

    const handleReset = (e) => {
        setCurrentValue(value);
    };

    return (
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <p>Current value: {currentValue}</p>
            <Button onClick={handleIncrement}>+</Button>
            <Button onClick={handleDecrement}>-</Button>
            <Button onClick={handleReset}>Reset</Button>
        </Box>
    );
}

export default Counter;