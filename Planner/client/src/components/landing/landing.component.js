import useStyles from './styles';
import { Link } from 'react-router-dom';
import { Card, Button, Paper, Typography, Container } from '@material-ui/core';
// import Navbar from "../nav/navbar.component";

const Landing = () => {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xl">

            <Paper className={classes.paper} >
            <div className={classes.title}>
                <Typography variant="h4" color="#F1DEDE">Trip Planner</Typography>
            </div>
            <div className={classes.subtitle}>
                <Typography variant="h6">Make planning trips easier!</Typography>
            </div>
            <div className={classes.body}>
                <Typography variant="body1">Use a Kanban board to organize and plan your trips</Typography>
            </div>
                <Button component={Link} to="/login" variant="contained" color="primary" className={classes.submit}>Start Trip</Button>
            </Paper>
       
        </Container>
    );
}

export default Landing;