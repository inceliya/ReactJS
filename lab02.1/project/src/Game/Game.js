import * as React from 'react';
import Table from '@mui/material/Table';
import { Button, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useState, useEffect, useRef } from 'react';


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function Game(props) {
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [number, setNumber] = useState();
    const [checkedNumbers, setCheckedNumbers] = useState([]);
    const [result, setResult] = useState();
    const [attempts, setAttempts] = useState();
    const checkedNumber = useRef();

    const startGame = () => {
        if (isGameStarted)
            return false;

        setAttempts(0);
        setResult("");
        setCheckedNumbers([]);
        setNumber(getRandomInt(1000));
        setIsGameStarted(true);
        checkedNumber.current.value = null;
    };

    const checkNumber = () => {
        const checkedNumberVal = +checkedNumber.current.value;
        if (checkedNumberVal < 0 || checkedNumberVal > 1000 || !Number.isInteger(checkedNumberVal)) {
            alert("INVALID INPUT");
            return false;
        }
        if(checkedNumbers.includes(checkedNumberVal)){
            alert("You already check this number");
            return false;
        }
        setAttempts(attempts + 1);
        if (checkedNumberVal != number) {
            if (attempts >= 9) {
                setResult("GAME OVER! NUMBER: " + number);
                setIsGameStarted(false);
            }
            setCheckedNumbers(checkedNumbers.concat(checkedNumberVal));
        }
        else {
            setResult("GOOD JOB!");
            setIsGameStarted(false);
        };
    };

    return (
        <>
            <Button onClick={startGame} disabled={isGameStarted}>Start game</Button>
            <input id="number" type="number" disabled={!isGameStarted} ref={checkedNumber}/>
            <Button onClick={checkNumber} disabled={!isGameStarted}>Check</Button>
            <div>
                <p>Information: </p>
                {checkedNumbers.map(n =>
                    <p key={n}>
                        N {n > number ? "<" : ">"} {n}
                    </p>
                )}
            </div>
            <div>
                <p>Attempts: {checkedNumbers.length}</p>
                <p>Result: {result}</p>
            </div>
        </>
    );
}

export default Game;
