import Counter from "./Counter";

function Counters(props) {
    const counters = [
        {id: 1, value: 5, max: 15, min: -5},
        {id: 2, value: 3, max: 5},
        {id: 3, value: 4},
        {id: 4},
    ];

    return counters.map(c => <Counter key={c.id} value={c.value} max={c.max} min={c.min} />);
}

export default Counters;