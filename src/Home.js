import { Link as RouterLink } from 'react-router-dom';
import './Home.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Home() {
    return (
        <div className="App">
            <Card sx={{ maxWidth: 500 }}>
                <CardContent>
                    <Typography color="textPrimary" gutterBottom variant="h2" align="center">
                        The Cheer Up App
                    </Typography>
                    <Typography color="textPrimary" gutterBottom variant="body1" align="center">
                        <span className="material-icons sunny">sunny</span> Let one of these options brighten your day. <span className="material-icons sunny">sunny</span>
                    </Typography>
                    <Typography color="textPrimary" gutterBottom variant="body1" align="center">Which do you prefer?</Typography>
                </CardContent>
                <ul>
                    <li><Button color="primary" variant="contained" component={RouterLink} to="/dog">Dogs</Button></li>
                    <li><Button color="primary" variant="contained" component={RouterLink} to="/cat">Cats</Button></li>
                    <li><Button color="primary" variant="contained" component={RouterLink} to="/other">Other</Button></li>
                </ul>
            </Card>
        </div>
    );
}

export default Home;
