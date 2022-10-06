import isToday from 'date-fns/isToday';
import isThisWeek from 'date-fns/isThisWeek';
import parseISO from 'date-fns/parseISO';
import endOfDay from 'date-fns/endOfDay';
import isPast from 'date-fns/isPast';

// const today = new Date(Date.now());
// console.log(today.toDateString())

const getTodayTodos = (todos) => {
	return todos.filter((todo) => isToday(parseISO(todo.dueDate)));
};

const getThisWeekTodos = (todos) => {
	return todos.filter((todo) => isThisWeek(parseISO(todo.dueDate)));
	// isThisWeek(parseISO(todo.dueDate)) && !isPast(endOfDay(parseISO(todo.dueDate)))
};

// it can either be past today as a whole
// or can be past today as in current hour
const isTodoInPast = (todoDate) => {
	return isPast(endOfDay(parseISO(todoDate)));
};

const getFormData = (form) => {
	const formData = new FormData(form);
	return Object.fromEntries(formData.entries());
};

export { getFormData, getTodayTodos, getThisWeekTodos, isTodoInPast };
