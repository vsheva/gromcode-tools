export const baseUrl = 'https://624c1be471e21eebbcfa4939.mockapi.io/api/v1/tasks';

//1
export const createTask = taskData =>
    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(taskData),
    });


//2
export const updateTask = (taskId, updatedTaskData) =>
    fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(updatedTaskData),
    });


//3
export const deleteTask = taskId =>
    fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    });


//4
const mapTasks = tasks => tasks.map(({_id, ...rest}) => ({id: _id, ...rest}))

export const getTasksList = () =>
    fetch(baseUrl)
        .then(response => response.json())
        .then(mapTasks)
console.log(getTasksList());