const listElem = document.querySelector('.list');

const compareTasks = (a, b) => {
    if (a.done - b.done !== 0) {
        return a.done - b.done;
    }

    if (a.done) {
        return new Date(b.finishDate) - new Date(a.finishDate);
    }
    return new Date(b.createDate) - new Date(a.createDate);
};

const createCheckboxElem = ({done, id}) => {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('data-id', id);
    checkbox.checked = done;
    checkbox.classList.add('list-item__checkbox');

    return checkbox;
};
const createListItem = ({text, done, id}) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list-item', 'list__item');
    const checkboxElem = createCheckboxElem({done, id});
    if (done) {
        listItemElem.classList.add('list-item_done');
    }

    const textElem = document.createElement('span');
    textElem.classList.add('list-item__text');
    textElem.textContent = text;

    const delBtnElem = document.createElement('button');
    delBtnElem.classList.add('list-item__delete-btn');
    delBtnElem.setAttribute('data-id', id);
    listItemElem.append(checkboxElem, textElem, delBtnElem);
    return listItemElem;
};

export const renderTasks = tasksList => {
    listElem.innerHTML = '';
    const tasksElems = tasksList
        .sort(compareTasks)
        .map(createListItem);
    // console.log(tasksElems);

    listElem.append(...tasksElems);
};