import { useDispatch } from "react-redux";
import { del, toggle } from "../store/modules/todos";

const TodoItem = ({ item }) => {
  const { id, text, done } = item;
  const dispatch = useDispatch();
  return (
    <li>
      <span
        className={done === true ? "on" : ""}
        onClick={() => dispatch(toggle(id))}
      >
        {text}
      </span>
      <button onClick={() => dispatch(toggle(id))}>완료</button>
      <button onClick={() => dispatch(del(id))}>삭제</button>
    </li>
  );
};

export default TodoItem;
