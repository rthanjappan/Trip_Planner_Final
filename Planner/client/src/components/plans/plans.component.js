import { Grid, Typography, Container, Button, TextField} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import useStyles from './styles.js';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../actions/tripdetails.actions.js'


const Plans = () => {

    const initialState = { GroupName: ''};

    const classes = useStyles();
    const dispatch = useDispatch();

    //call information from store
    const {details, isLoading} = useSelector((state) => state.details);

    //get from database
    useEffect(() => {
        dispatch(getDetails());
    }, [dispatch])

    const [detailForm, setDetailForm] = useState(initialState);

    const handleClick = (e) => {
    }

    return (
        <Container>
            <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid className={classes.gridItem} item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>

                </Grid>
            </Grid>
            <Button variant="contained" component={Link} to="/names"> Next </Button>

            <Button variant="contained" onClick={handleClick}> Update </Button>


        </Container>
    );
}

export default Plans;