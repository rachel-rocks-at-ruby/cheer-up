import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button, Card, CardActions, CardMedia } from '@material-ui/core';

function Animal() {
    const [animalImage, setAnimalImage] = useState('');
    const pathame = window.location.pathname;
    const animal = pathame === '/cat' ? 'cat' : 'dog';
    

    const refreshCat = () => {
        fetch("https://api.thecatapi.com/v1/images/search")
            .then((res) => res.json())
            .then((data) => setAnimalImage(data[0].url));
    }

    const refreshDog = () => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => setAnimalImage(data.message));
    }

    const refreshAnimal = () => {
        animal === 'cat' ? refreshCat() : refreshDog();
    };

    useEffect(() => {
        refreshAnimal();
    }, []);

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="500"
                image={animalImage}
                alt={`a random ${animal}`}
            />
            <CardActions>
                <Button size="small" onClick={() => refreshAnimal()}>Get a new {animal}</Button>
                <Button size="small" component={RouterLink} to="/">Go home</Button>
            </CardActions>
        </Card>
    );
}

export default Animal;
