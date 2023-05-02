import { Grid, Typography, Container} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles.js';
import { Draggable } from 'react-beautiful-dnd';
import { getTask, createTask} from '../../../actions/task.action.js';

const Tasks = ({task, setCurrentId}) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const {tasks, isLoading} = useSelector((state) => state.task);

    useEffect(() => {
        dispatch(getTask());
    }, [dispatch])

    return (
            <Draggable draggableId={task._id} index = {task.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref ={provided.innerRef}
                        isDragging = {snapshot.isDragging}
                    >
                    </Container>
                )}
            </Draggable>
    );
}

export default Tasks;