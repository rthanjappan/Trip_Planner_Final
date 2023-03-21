const intData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Pizza Resturant' },
        'task-2': { id: 'task-2', content: 'Steak Resturant' },
        'task-3': { id: 'task-3', content: 'Sushi Resturant' },
        'task-4': { id: 'task-4', content: 'Burger Resturant' },
        'task-5': { id: 'task-5', content: 'Spaghetti Resturant' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Places To Eat',
            taskIds: ['task-1','task-2', 'task-3', 'task-4'],
        },
        'column-2': {
            id: 'column-2',
            title: 'Things to Do',
            taskIds: [],
        },
        'column-3': {
            id: 'column-3',
            title: 'Places to go',
            taskIds: [],
        },
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default intData;