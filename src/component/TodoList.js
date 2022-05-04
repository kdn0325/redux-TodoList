import { useSelector } from "react-redux";
import "./TodosList.css";
import TodoItem from "./TodoItem"

const TodoList = () => {
    const {list} = useSelector(state=>state.todos)
    return (
        <ul>
            {
                list.map(item=><TodoItem key={item.id} item={item}/>)
            }
        </ul>
    );
};

export default TodoList;