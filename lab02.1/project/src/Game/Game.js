import * as React from 'react';
import Table from '@mui/material/Table';
import { Button, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function Game(props) {
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [number, setNumber] = useState();
    const [checkedNumbers, setCheckedNumbers] = useState([]);
    const [result, setResult] = useState();
    const [attempts, setAttempts] = useState();

    const startGame = () => {
        if (isGameStarted)
            return false;

        setAttempts(0);
        setResult("");
        setCheckedNumbers([]);
        setNumber(getRandomInt(1000));
        setIsGameStarted(true);
        document.getElementById("number").value = "";
    };

    const checkNumber = () => {
        const checkedNumber = +document.getElementById("number").value;
        console.log(checkedNumber);
        if (checkedNumber < 0 || checkedNumber > 1000 || !Number.isInteger(checkedNumber)) {
            alert("INVALID INPUT");
            return false;
        }
        if(checkedNumbers.includes(checkedNumber)){
            alert("You already check this number");
            return false;
        }
        setAttempts(attempts + 1);
        if (checkedNumber != number) {
            if (attempts >= 9) {
                setResult("GAME OVER! NUMBER: " + number);
                setIsGameStarted(false);
            }
            setCheckedNumbers(checkedNumbers.concat(checkedNumber));
        }
        else {
            setResult("GOOD JOB!");
            setIsGameStarted(false);
        };
    };

    return (
        <>
            <Button onClick={startGame} disabled={isGameStarted}>Start game</Button>
            <TextField id="number" type="number" disabled={!isGameStarted}/>
            <Button onClick={checkNumber} disabled={!isGameStarted}>Check</Button>
            {number}
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
