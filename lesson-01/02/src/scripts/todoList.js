import {onCreateTask} from './createTask.js';
import {onClickTask} from './updateTask.js';

export const initTodoListHandlers = () => {
    const buttonElem = document.querySelector('.create-task-btn');
    buttonElem.addEventListener('click', onCreateTask);

    const listElem = document.querySelector('.list');
    listElem.addEventListener('click', onClickTask);
};