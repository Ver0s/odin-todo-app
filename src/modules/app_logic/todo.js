import { v4 as uuidv4 } from 'uuid';

const Todo = (title, description, dueDate, priority, todoUUID = uuidv4()) => {
	return { title, description, dueDate, priority, todoUUID };
};

export default Todo;
