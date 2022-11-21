import { useState, useEffect } from "react";
import { Product } from "./Product";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';

export function ProductList({ dataURL }) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [sorting, setSorting] = useState('asc');
    const [category, setCategory] = useState(null);

    const handleChangeSorting = (e) => {
        setSorting(e.target.value)
    };

    const handleChangeCategory = (e) => {
        setCategory(e.target.value)
    };

    useEffect(() => {
        const categoriesUrl = dataURL + "/categories";
        fetch(categoriesUrl)
            .then((response) => response.json())
            .then((responseJson) => setCategories(responseJson));

        const url = !category ? dataURL + "?sort=" + sorting : dataURL + "/category/" + category + "?sort=" + sorting;
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => setProducts(responseJson));
    }, [dataURL, sorting, category]);

    const getFavourites = () => {
        return JSON.parse(localStorage.getItem('favourites')) || [];
    };

    const setFavourites = (favourites) => {
        localStorage.setItem('favourites', JSON.stringify(favourites))
    };

    const addToFavourites = (id) => {
        let favourites = [...getFavourites(), id];
        setFavourites(favourites);
    };

    const removeFromFavourites = (id) => {
        let favourites = getFavourites().filter((f) => f !== id);
        setFavourites(favourites);
    };

    const isFavourite = (id) => {
        return getFavourites().some((f) => f === id);
    };

    return (
        <>
            <br />
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="sorting">Sorting</InputLabel>
                    <Select
                        labelId="sorting"
                        id="sortingSelect"
                        value={sorting}
                        label="Sorting"
                        onChange={handleChangeSorting}
                    >
                        <MenuItem value='asc'>Ascending</MenuItem>
                        <MenuItem value='desc'>Descending</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <br />
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="cetegory">Category</InputLabel>
                    <Select
                        labelId="category"
                        id="categorySelect"
                        value={category}
                        label="Sorting"
                        onChange={handleChangeCategory}
                    >
                        <MenuItem value={null}>All</MenuItem>
                        {categories.map(c =>
                            <MenuItem key={c} value={c}>{c}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </Box>
            <br />
            <Grid container spacing={2}>
                {products.map(item =>
                    <Grid item xs={4} key={item.id}>
                        <Product item={item} checkIsFavourite={isFavourite}
                            addToFavourites={addToFavourites} removeFromFavourites={removeFromFavourites} />
                    </Grid>
                )}
            </Grid>
        </>
    )
}