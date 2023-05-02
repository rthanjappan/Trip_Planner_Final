import { Grid, Typography, Container, Button, TextField, Divider} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles.js';
import { Droppable } from 'react-beautiful-dnd';
import { updateColumn, deleteColumn, getColumn } from '../../../actions/column.action.js';
import { createTask, getTask } from '../../../actions/task.action.js';
import Task from '../tasks/tasks.js';

const Columns = ({column, setCurrentId}) => {

    const initialState = { title: '' , description: ''}

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(createTask(initialState));
        // dispatch(updateColumn(column._id, ))
    }

    return (
        <Container>
            <Typography>{column.title}</Typography>
            <Divider/>
            <br/>
            <Button onClick={handleClick} color="primary" variant="contained">+</Button>
            <Droppable droppableId= {column._id}>
                {(provided, snapshot) => (
                    <Grid
                        ref={provided.innerRef} 
                        {...provided.droppableProps}
                        isDraggingOver = {snapshot.isDraggingOver}
                    >
                        {column.tasks.map((task) => (
                            <Task 
                            task = {task} key = {task._id}
                            />
                        ))}

                        {provided.placeholder}
                    </Grid>
                )}
            </Droppable>
        </Container>
    );
}

export default Columns;