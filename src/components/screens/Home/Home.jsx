import React, { useState } from 'react'
import TodoItem from './item/TodoItem'
import CreateTodoField from './create-todo-field/CreateTodoField'

const data = [
	{
		_id: 'todos1',
		title: 'title1',
		isCompleted: false,
	},
	{
		_id: 'todos2',
		title: 'title2',
		isCompleted: false,
	},
	{
		_id: 'todos3',
		title: 'title3',
		isCompleted: false,
	},
]
const Home = () => {
	const [todos, setTodos] = useState(data)

	const changeTodo = id => {
		const copy = [...todos]
		const current = copy.find(t => t._id === id)
		current.isCompleted = !current.isCompleted
		setTodos(copy)
	}

	const removeTodo = id => {
		const copy = [...todos]
		const current = copy.find(t => t._id === id)
		copy.pop(current._id)
		setTodos(copy)
		// Второй вариант реализации
		//setTodos([...todos].filter(t => t._id !== id))
	}

	return (
		<div className=' text-white w-4/5 mx-auto'>
			<h1 className='text-2xl font-bold text-center mb-4'>Todo for junior</h1>
			<CreateTodoField setTodos={setTodos} />
			{todos.map(todo => (
				<TodoItem
					key={todo._id}
					todo={todo}
					changeTodo={changeTodo}
					removeTodo={removeTodo}
				></TodoItem>
			))}
		</div>
	)
}

export default Home
