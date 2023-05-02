import { Grid, Typography, Container} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles.js';
import { Droppable } from 'react-beautiful-dnd';
import { updateColumn, deleteColumn, getColumn } from '../../../actions/column.action.js';

const Columns = ({column, setCurrentId}) => {

    const classes = useStyles();
    const dispatch = useDispatch();


    return (
        <Container>
            <Typography>{column.title}</Typography>
            <Droppable>
                
            </Droppable>
        </Container>
    );
}

export default Columns;