import { Grid, Typography, Container, TextField, Button} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import useStyles from './styles.js';
import { createColumn, updateColumn, deleteColumn, getColumn } from '../../actions/column.action.js';
import Column from './columns/columns.js';

const Board = ({setCurrentId}) => {

    const initialState = { title: ''};

    const classes = useStyles();
    const dispatch = useDispatch();

    const {columns, isLoading} = useSelector((state) => state.column);

    const [columnData, setColumnData] = useState(initialState);

    useEffect(() => {
        dispatch(getColumn());
    }, [dispatch])

    const handleSubmit = (e) => {
        // e.preventDefault();

        dispatch(createColumn(columnData));
    
    };

    return (
        <DragDropContext>
            <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={12} md={2} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                    <form onSubmit={handleSubmit}>
                    <TextField name = 'title' onChange={(e) => setColumnData({...columnData, title: e.target.value})}></TextField>
                    <br/>
                    <Button type='submit' color="primary" variant="contained">Create</Button>
                    </form>
                </Grid>
                {columns.map((column) => (
                    <Grid item xs={12} sm={12} md={6} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                        <Column column = {column} />
                    </Grid>
                ))}
            </Grid>
        </DragDropContext>
    );
}

export default Board;