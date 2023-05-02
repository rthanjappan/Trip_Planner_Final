import { Grid, Typography, Container, TextField, Button, Divider} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import useStyles from './styles.js';
import { createColumn, updateColumn, deleteColumn, getColumn } from '../../actions/column.action.js';
import Column from './columns/columns.js';
import { createTask, getTask } from '../../actions/task.action.js';

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
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={2} md={1} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                <Typography>Create Column</Typography>
                <Divider/>
                <form onSubmit={handleSubmit}>
                <TextField variant="outlined" label="Title" margin="normal" value={columnData.title}
                onChange={(e) => setColumnData({...columnData, title: e.target.value})}></TextField>
                <br/>
                <Button type='submit' color="primary" variant="contained">+</Button>
                </form>
            </Grid>
            <Grid item xs={12} sm={9} md={9} style={{ background: 'rgba(255, 255, 255, 1)' }}>
            <DragDropContext>
                <Grid className={classes.gridContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    {columns.map((column) => (
                        <Grid item xs={12} sm={6} md={3} style={{ background: 'rgba(255, 255, 255, 1)' }}>
                            <Column column = {column} setCurrentId={setCurrentId}/>
                        </Grid>
                    ))}
                </Grid>
            </DragDropContext>
            </Grid>
        </Grid>
    );
}

export default Board;