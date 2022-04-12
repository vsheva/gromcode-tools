import {renderTasks} from './renderer.js';
import {createTask, getTasksList} from './tasksGateway.js';


export const onCreateTask = () => {
    const taskTitleInputElem = document.querySelector('.task-input');
    const text = taskTitleInputElem.value;

    if (!text) {
        return;
    }
    taskTitleInputElem.value = '';

//1.
    const newTask = {
        text,
        done: false,
        createDate: new Date().toISOString(),
        id: Math.random().toString(),
    };


    createTask(newTask)    //2.
        .then(() => getTasksList()) //3.
        .then(newTasksList => {
            //setItem("tasksList", newTasksList) //4.
            renderTasks(newTasksList);//5
        });
}


// 1. Prepare data
// 2. Write data to data base
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data