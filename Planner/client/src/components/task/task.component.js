import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import useStyles from './styles.js';
import { Card, Paper, Typography, Container } from '@material-ui/core';

const Task = ({task, index}) => {

    const classes = useStyles();

    return (
        <Draggable draggableId= {`${task.id}`} key = {task.id} index = {index}>

            {(provided, snapshot) => (
                    <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                      >
                        <div style={{ display: "flex", justifyContent: "start", padding: 2 }}>
                          <span>
                            <small>
                              #{task.id}
                              {"  "}
                            </small>
                          </span>
                        </div>
                        <div
                          style={{ display: "flex", justifyContent: "center", padding: 2 }}
                        >
                          <Typography>{task.title}</Typography>
                        </div>

                        {provided.placeholder}
                    </div>
            )}

        </Draggable>
    );
};

export default Task;