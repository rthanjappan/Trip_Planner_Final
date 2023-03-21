import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import useStyles from './styles.js';
import { Paper, Typography, Container } from '@material-ui/core';
import Task from '../task/task.component.js';

const Column = ({ title, tasks, id}) => {

    const classes = useStyles();


    return (
        <Container className = {classes.container}>
            <Typography variant="h4" color="primary">{title}</Typography>

            <Droppable droppableId= {id}>
                {(provided, snapshot) => {
                    <div
                        ref = {provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver = {snapshot.isDraggingOver}
                        className = {classes.tasklist}
                    >
                        {
                            tasks.map((task, index) => 
                            (<Task key = {index} index = {index} task = {task}/>
                            ))}
                            
                        {provided.placeholder}
                    </div>
                }}
            </Droppable>
        </Container>
    );
};

export default Column;