import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import "./Todos.css"


const Todos = () => {
    return (
        <div className="Todos">
            <h2>할일 목록</h2>
            <TodoAdd/>
            <TodoList/>
        </div>
    );
};

export default Todos;