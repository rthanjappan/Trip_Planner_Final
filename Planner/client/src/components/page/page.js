import React from 'react';
import ReactDOM from 'react-dom';
import initialData from './intData';
import Column from './column';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { Card, Button, Paper, Typography, Grid, TextField, Divider} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

const Container = styled.div`
    display: flex;
`;

const intData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Pizza Restaurant' },
        'task-2': { id: 'task-2', content: 'Park' },
        'task-3': { id: 'task-3', content: 'Sushi Resturant' },
        'task-4': { id: 'task-4', content: 'Burger Resturant' },
        'task-5': { id: 'task-5', content: 'Spaghetti Resturant' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: '',
            taskIds: [],
        },
        'column-2': {
            id: 'column-2',
            title: 'Places to eat',
            taskIds: [],
        },
        'column-3': {
            id: 'column-3',
            title: 'Activites',
            taskIds: [],
        },
    },
    columnOrder: ['column-1',],
};


const handleSubmit = (e) => {
    // e.preventDefault();
};

export default class App extends React.Component {

  state = intData;

  onDragEnd = result => {

    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = 'inherit';

    const { destination, source, draggableId } = result;

    if (!destination) {
        return;
    }

    if (
        destination.droppableId === source.droppableId &&
        destination. index === source.index
    ) {
        return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
        const newTaskIds = Array.from(start.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
    
        const newColumn = {
            ...start,
            taskIds: newTaskIds,
        }
    
        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumn.id] : newColumn,
            },
        };
    
        this.setState(newState);
        return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
        ...start,
        taskIds: startTaskIds,
    }

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0 , draggableId);
    const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
    };

    const newState = {
        ...this.state,
        columns: {
            ...this.state.columns,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish,
        },
    };
this.setState(newState);
  };

  
  

  render() {

    return (
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={6} md={1} style={{ background: 'rgba(255, 255, 255, 0.75)' }}>
                <form onSubmit={handleSubmit}>
                <Typography align='center'>Create Column</Typography>
                <Divider/>
                <TextField name = 'title' variant="outlined" label="Title" margin="normal"></TextField>
                <br/><br/>
                <Button type='submit' color="primary" variant="contained" >+</Button>
                </form>
            </Grid>
            <Grid item xs={12} sm={6} md={1} style={{ background: 'rgba(255, 255, 255, 0.75)' }}>
                <form onSubmit={handleSubmit}>
                <Typography align='center'>Create Task</Typography>
                <Divider/>
                <TextField name = 'title' variant="outlined" label="Title" margin="normal"></TextField>
                <br/><br/>
                <Button type='submit' color="primary" variant="contained" >+</Button>
                </form>
            </Grid>
            <Grid item xs={12} sm={6} md={9} style={{ background: 'rgba(255, 255, 255, 1)' }}>
            <DragDropContext 
                onDragStart = {this.onDragStart}
                onDragUpdate = {this.onDragUpdate}
                onDragEnd={this.onDragEnd}
            >
            <Container>
                {this.state.columnOrder.map(columnId => {
                const column = this.state.columns[columnId];
                const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

                return <Column key={column.id} column={column} tasks={tasks} />;
                })}
            </Container>
            </DragDropContext>
            </Grid>
        </Grid>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
