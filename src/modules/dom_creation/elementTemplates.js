import { createElement } from './dom-utils';
import calendar from '../../assets/icons/calendar.svg';
import edit from '../../assets/icons/edit.svg';
import trash from '../../assets/icons/trash-2.svg';

// i can use object destructuring here to avoid repeating 'todo.'
// something like that const todoTemplate = ({title, description, priority, dueDate}) => {}
// rename todoTemplate to createTemplate or sth
const renderTodo = (todo) => {
	const template = `
    <li class="todo-item" data-todo-id="${todo.id}">
        <div class="check">
            <input type="checkbox" data-todo-action="complete"/>
        </div>
        <div class="todo-content">
            <div class="todo-details">
                <span class="todo-title">${todo.title}</span>
                <span class="todo-description">${todo.description}</span>
                <span class="todo-priority">${todo.priority}</span>
                <div class="due-date">
                    <img
                        src=${calendar}
                        alt="task due date"
                    />
                    <span id="due-date">${todo.dueDate}</span>
                </div>
            </div>
            <div class="todo-actions hidden">
                <button class="btn btn-only-icon" data-todo-action="edit">
                    <img src=${edit}/>   
                </button>
                <button class="btn btn-only-icon" data-todo-action="delete">
                    <img
                        src=${trash}
                        alt="delete todo"
                    />
                </button>
            </div>
        </div>
    </li>
    `;
	return createElement(template);
};

const renderProjectLi = (projectTitle) => {
	const template = `
        <li>${projectTitle}</li>
    `;
	return createElement(template);
};

export { renderTodo, renderProjectLi };
