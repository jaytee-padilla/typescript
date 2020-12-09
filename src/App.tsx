/* eslint-disable */
import React, { useState } from 'react';

function App() {
	// DATA

	const [data, setData] = useState([
		{ id: 1, text: 'First todo', done: false, place: 'home' },
		{ id: 2, text: 'Second todo', done: false, place: 'work' },
		{ id: 3, text: 'Third todo', done: false, place: {custom: 'Gym'} },
		{ id: 4, text: 'Fourth todo', done: false, place: {custom: 'Supermarket'} },
		{ id: 5, text: 'Fifth todo', done: false }
	]);

	const data2 = data;

	// TYPES

	type Todo = Readonly <{
		id: number,
		text: string,
		done: boolean,
		place?: Place
	}>

	type CompletedTodo = Todo & {
		readonly done: true
	}

	type Place = 'home' | 'work' | {custom: String};

	// FUNCTIONS

	// Takes a single todo object and returns
	// a new todo object containing the opposite
	// boolean value for the "done" proprty.
	function toggleTodo(todo: Todo): Todo {
		return {
			id: todo.id,
			text: todo.text,
			done: !todo.done
		}
	}

	// Takes an array of todo items and returns
	// a new array where "done" is all true
	function completeAll(todos: readonly Todo[]): CompletedTodo[] {
		// We want it to return a new array
		// instead of modifying the original array
		return todos.map(todo => ({
			...todo,
			done: true
		}));
	}

	function placeToString(place: Place): string {
		// Takes a Place and returns a string
		// that can be used for the place label UI
		if (place === 'home') {
			return '🏠 Home'
		} else if (place === 'work') {
			return '💼 Work'
		} else {
			return `📍 ${place.custom}`
		}
	}

	// VIEW

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
