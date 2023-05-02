import { Grid, Typography, Container} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import useStyles from './styles.js';
import germany from '../../images/germany.jpg';
import japan from '../../images/japan.jpg';
import paris from '../../images/paris.jpg';
import { Link } from 'react-router-dom';

function VoteCounter() {
    const [voteNumber, setVoteNumber] = useState(0);
    const classes = useStyles();

    const Increment = () =>{
        setVoteNumber(voteNumber + 1);
    }

    return (
        <div>
          <Typography variant="h5">{voteNumber}</Typography>
          <button onClick={Increment} className={classes.button}>Vote</button>
        </div>
      );
};

const Vote = () => {

    const classes = useStyles();

    return (
        <Container>
            <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid className={classes.gridItem} item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                    <Typography variant="h5">Option 1</Typography>
                    <img className={classes.image} src={germany} alt="Germany"/>
                    <Typography variant="h5">Germany</Typography>
                    <VoteCounter component={Link} to="/login"/>
                </Grid>
                <Grid className={classes.gridItem} item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                    <Typography variant="h5">Option 2</Typography>
                    <img className={classes.image} src={japan} alt="japan"/>
                    <Typography variant="h5">Japan</Typography>
                    <VoteCounter/>
                </Grid>
                <Grid className={classes.gridItem} item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                    <Typography variant="h5">Option 3</Typography>
                    <img className={classes.image} src={paris} alt="paris"/>
                    <Typography variant="h5">Paris</Typography>
                    <VoteCounter/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Vote;