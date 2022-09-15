import { useState } from "react";

function Cities() {
    const cities = [
        { id: 1, title: "Kyiv", img: "kyiv.png" },
        { id: 2, title: "Zhytomyr", img: "zt.png" },
        { id: 3, title: "Luck", img: "luck.png" },
    ];

    const [cityId, setCityId] = useState(cities[0].id);

    const handleChange = event => {
        setCityId(+event.target.value);
    };

    return (
        <>
            <select onChange={handleChange}>
                {cities.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
            </select>
            <br />
            <img src={require("./img/" + cities.find(c => c.id === cityId).img)} />
        </>
    );
}

export default Cities;