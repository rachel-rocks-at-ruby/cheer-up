import { Link as RouterLink } from 'react-router-dom';
import './Home.css';
import { Button, Typography } from '@material-ui/core';

function Home() {
    return (
        <div className="App">
            <Typography color="textPrimary" gutterBottom variant="h2" align="center">
                The Cheer Up App
            </Typography>
            <Typography color="textPrimary" gutterBottom variant="body1" align="center">
                <span className="material-icons md-18 sunny">sunny</span> Let one of these options brighten your day. <span className="material-icons md-18 sunny">sunny</span>
            </Typography>
            <Typography color="textPrimary" gutterBottom variant="body1" align="center">Which do you prefer?</Typography>
            <ul>
                <li><Button color="primary" variant="contained" component={RouterLink} to="/dog">Dogs</Button></li>
                <li><Button color="primary" variant="contained" component={RouterLink} to="/cat">Cats</Button></li>
                <li><Button color="primary" variant="contained" component={RouterLink} to="/other">Other</Button></li>
            </ul>
        </div>
    );
}

export default Home;
