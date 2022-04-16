//import { renderTasks } from './list/render.js';
import { initTodoListHandlers } from './list/todoList.js';
import './index.scss';
renderTasks(getItem());
document.addEventListener('DOMContentLoaded', () => {
    renderTasks();

    initTodoListHandlers();
});

/*
1.Get data from server
2.Save data to front-end storage
*/
