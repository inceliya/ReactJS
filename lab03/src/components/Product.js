import { useRef, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { CardActionArea } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import DifferenceOutlinedIcon from '@mui/icons-material/DifferenceOutlined';
import Portal from '@mui/material/Portal';

export function Product({ item, checkIsFavourite, addToFavourites, removeFromFavourites }) {
    const { id, title, price, category, description, image } = item

    const [isInCart, setIsInCart] = useState(false);
    const [isAddToComapring, setIsAddToComapring] = useState(false);
    const [isFavourite, setIsFavourite] = useState(checkIsFavourite(id));

    const cartRef = useRef(null);
    const alertContainer = useRef(null);

    const onDetailClick = () => {
        cartRef.current.focus();
    };

    const handleAddToFavourites = () => {
        if (isFavourite) {
            removeFromFavourites(id)
            setIsFavourite(false);
        } else {
            addToFavourites(id)
            setIsFavourite(true);
        }
    };

    const handleAddToCart = () => {
        setIsInCart(!isInCart);
    };

    const handleAddToCompare = () => {
        setIsAddToComapring(!isAddToComapring);
    };

    return (
        <Card sx={{ maxWidth: 345 }} justifyContent="space-between">
            <CardActionArea onClick={onDetailClick}>
                <CardMedia
                    component="img"
                    height="360"
                    image={image}
                    alt={title}
                />
                <CardContent key={id}>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {category}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" ref={alertContainer}>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton ref={cartRef} aria-label="add to cart" onClick={handleAddToCart}>
                    {isInCart ? <ShoppingCartIcon /> : <ShoppingCartOutlinedIcon />}
                </IconButton>
                <IconButton aria-label="add to favorites" onClick={handleAddToFavourites}>
                    {isFavourite ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                </IconButton>
                <IconButton aria-label="add to favorites" onClick={handleAddToCompare}>
                    <DifferenceOutlinedIcon />
                    {isAddToComapring && (
                        <Portal container={alertContainer.current}>
                            <span>{title} Is used for comparing</span>
                        </Portal>
                    )}
                </IconButton>
            </CardActions>
        </Card>
    );
}