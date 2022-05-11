import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import horse from './assets/horse.jpg';

function Other() {
    const [joke, setJoke] = useState({});

    const refreshJoke = () => {
        fetch("https://api.jokes.one/jod")
            .then((res) => res.json())
            .then((data) => setJoke(data.contents.jokes[0].joke));
    }

    useEffect(() => {
        refreshJoke();
    }, []);

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="500"
                image={horse}
                alt="Joke of the day"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Joke of the Day
                </Typography>
                <Typography variant="body2" color="secondary">{joke.text}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" component={RouterLink} to="/">Go home</Button>
            </CardActions>
        </Card>
    );
}

export default Other;