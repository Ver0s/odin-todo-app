import { createElement } from './dom-utils';
import calendar from '../../assets/icons/calendar.svg';
import edit from '../../assets/icons/edit.svg';
import trash from '../../assets/icons/trash-2.svg';

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

const renderProjectLi = (project) => {
	const template = `
        <li class="project-item" data-project-id="${project.id}">${project.title}</li>
    `;
	return createElement(template);
};

const addTodoForm = () => {
	const template = `
    <div class="modal-content">
        <h2>Add Todo</h2>
        <form id="add-todo-form" class="todo-form">
            <div class="form-input">
                <label for="title">Title*</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                />
            </div>
            <div class="form-input">
                <label for="description">Description</label>
                <textarea
                    id="description"
                    rows="3"
                    name="description"
                ></textarea>
            </div>
            <div class="form-input">
                <label for="priority">Priority</label>
                <select id="priority" name="priority">
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
            <div class="form-input">
                <label for="dueDate">Date</label>
                <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                />
            </div>
            <div class="manage-form">
                <button
                    type="button"
                    class="btn btn-secondary"
                    id="cancel-form-btn"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    class="btn btn-primary"
                    id="submit-todo-form-btn"
                >
                    Add Todo
                </button>
            </div>
        </form>
    </div>
    `;
	return createElement(template);
};

const editTodoForm = (todo) => {
	const template = `
    <div class="modal-content">
        <h2>Edit Todo</h2>
        <form id="edit-todo-form" class="todo-form">
            <div class="form-input">
                <label for="title">Title*</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value="${todo.title}"
                />
            </div>
            <div class="form-input">
                <label for="description">Description</label>
                <textarea
                    id="description"
                    rows="3"
                    name="description"
                >${todo.description}</textarea>
            </div>
            <div class="form-input">
                <label for="priority">Priority</label>
                <select id="priority" name="priority">
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
            <div class="form-input">
                <label for="dueDate">Date</label>
                <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    value="${todo.dueDate}"
                />
            </div>
            <div class="manage-form">
                <button
                    type="button"
                    class="btn btn-secondary"
                    id="cancel-form-btn"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    class="btn btn-primary"
                    id="submit-todo-form-btn"
                >
                    Edit Todo
                </button>
            </div>
        </form>
    </div>
    `;
	return createElement(template);
};

const addProjectForm = () => {
	const template = `
    <div class="modal-content">
        <h2>Add Project</h2>
        <form id="add-project-form" class="project-form">
            <div class="form-input">
                <label for="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                />
            </div>
            <div class="manage-project-form">
                <button
                    type="button"
                    class="btn btn-secondary"
                    id="cancel-form-btn"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    class="btn btn-primary"
                    id="submit-project-form-btn"
                >
                    Add Project
                </button>
            </div>
        </form>
    </div>
    `;
	return createElement(template);
};

export {
	renderTodo,
	renderProjectLi,
	addTodoForm,
	editTodoForm,
	addProjectForm,
};
