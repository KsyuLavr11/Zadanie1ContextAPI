import styles from '../../App.module.css';
import { TodoItemEdition } from '../TododItem/TodoItemEdition';
import { useContext } from 'react';
import { AppContext } from '../../context';

export const TodoList = () => {
	const { todos, deleteTodo, updateTodo } = useContext(AppContext);

	return (
		<ul className={styles['todo-list-container']}>
			{todos.map((todo) => (
				<li key={todo.id} className={styles['todo-item']}>
					<TodoItemEdition
						todo={todo}
						updateTodo={updateTodo}
						deleteTodo={deleteTodo}
					/>
				</li>
			))}
		</ul>
	);
};
