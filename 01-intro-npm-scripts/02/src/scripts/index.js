import {initTodoListHandlers} from './todoList.js';
import {renderTasks} from './renderer.js';
import {createTask, getTasksList} from './tasksGateway.js';

document.addEventListener('DOMContentLoaded', () => {
    getTasksList()
        .then((newTasksList) => {
                renderTasks(newTasksList);
            }
        )

    initTodoListHandlers();
});


// 1. Prepare data
// 2. Save new data to front-end storage
