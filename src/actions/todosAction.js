import * as types from '../constants/TodoActionTypes'

export const addTodo = (text, cat = 'default') => ({
	type: types.ADD_TODO,
	text,
	cat,
})
export const editTodoCat = (id, cat) => ({
	type: types.EDIT_TODO_CAT,
	id,
	cat
})
export const setVisibilityFilter = (filter) => ({
	type: types.SET_VISIBILITY_FILTER,
	filter
})
