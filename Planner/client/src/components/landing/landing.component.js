import useStyles from './styles';
import { Link } from 'react-router-dom';
import { Card, Button, Paper, Typography, Container } from '@material-ui/core';
import Navbar from "../nav/navbar.component";

const Landing = () => {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xl">
            <Navbar />

            <Paper className={classes.paper} >
            <div className={classes.title}>
                <Typography variant="h4" color="primary">Trip Planner</Typography>
            </div>
            <div className={classes.subtitle}>
                <Typography variant="h6">@@@@@@@@</Typography>
            </div>
            <div className={classes.body}>
                <Typography variant="body1">!!!!!!!!!!!!!!</Typography>
            </div>
                <Button component={Link} to="/login" variant="contained" color="primary" className={classes.submit}>Sign In</Button>
            </Paper>
       
        </Container>
    );
}

export default Landing;