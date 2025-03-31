import './App.css';
import { ControlPanel } from './components/controlPanel/ControlPanel';
import { SearchDebounce } from './components/Search/Search.jsx';
import { TodoList } from './components/TodoList/TodoList';
import { useTodos } from './hooks/useTodos';
import styles from './App.module.css';
import { AppContext } from './context.js';

export const App = () => {
	const userData = useTodos();

	const { isLoading, error, setSearchTerm } = userData;

	const handleSearch = (searchTerm) => {
		setSearchTerm(searchTerm);
	};

	if (isLoading) return <div className={styles.loader}>Загрузка...</div>;
	if (error) return <div className={styles.error}>Ошибка{error.message}</div>;

	return (
		<div className="app">
			<h4>Список дел</h4>
			<SearchDebounce onChange={handleSearch} />
			<AppContext.Provider value={userData}>
				<ControlPanel />
				<TodoList />
			</AppContext.Provider>
		</div>
	);
};
