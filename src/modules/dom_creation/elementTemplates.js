import calendar from '../../assets/icons/calendar.svg';
import edit from '../../assets/icons/edit.svg';
import trash from '../../assets/icons/trash-2.svg';

const todoTemplate = (todo) => {
	return `
    <li class="todo-item">
        <div class="check">
            <input type="checkbox" />
        </div>
        <div class="todo-content">
            <div class="todo-details">
                <span id="title">${todo.title}</span>
                <span id="description">${todo.description}</span>
                <span id="priority">${todo.priority}</span>
                <div class="due-date">
                    <img
                        src=${calendar}
                        alt="task due date"
                    />
                    <span id="due-date">${todo.dueDate}</span>
                </div>
            </div>
            <div class="todo-actions hidden">
                <img src=${edit} />
                <img
                    src=${trash}
                    alt="delete task"
                />
            </div>
        </div>
    </li>
    `;
};

const addTodoTemplate = () => {
	return `
    <form id="add-todo-form">
        <div class="add-todo-container">
            <div class="title-desc">
                <input type="text" placeholder="Task name" id="title">
                <textarea placeholder="description" id="description"></textarea>
            </div>
            <div class="date-priority">
                <input type="date" id="dueDate">
                <select id="priority">
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
        </div>
        <div class="manage-form">
            <button id="cancel-form">Cancel</button>
            <button type="submit" id="add-todo-btn">Add Todo</butotn>
        </div>
    </form>
    `;
};

export { todoTemplate, addTodoTemplate };
