import { Grid, Typography, Container, Button, TextField} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import useStyles from './styles.js';
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../actions/tripdetails.actions.js'


const Plans = () => {

    const initialState = { GroupName: ''};

    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //call information from store
    const {details, isLoading} = useSelector((state) => state.details);
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')));

    //get from database
    useEffect(() => {
        dispatch(getDetails());
    }, [dispatch])

    const userDetail = details.filter((detail) => detail.YourEmail === user.result.email);

    const go = () =>{
        navigate("/invitations")
    }

    return (
        <Container>
            <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid className={classes.gridItem} item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                    {userDetail.map((detail) => (
                        <Grid key = {detail._id} onClick = {go}>
                            <Typography>{detail.Group_ID}</Typography>
                            <Typography>{detail.GroupName}</Typography>
                            <Typography>{detail.YourEmail}</Typography>
                            
                        </Grid>
                    ))}
                </Grid>
                <Grid className={classes.gridItem} item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                <Button variant="contained" component={Link} to="/names"> Organize A New Trip </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Plans;