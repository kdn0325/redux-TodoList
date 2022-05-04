import { useDispatch, useSelector } from 'react-redux';
import { add, changeInput } from '../store/modules/todos';

const TodoAdd = () => {
    const dispatch = useDispatch();
    const {input} = useSelector(state=>state.todos);

    const onSubmit =(e) =>{
        e.preventDefault()
        dispatch(add(input))
        dispatch(changeInput(input))
        dispatch(changeInput(''));
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={input} onChange={(e)=>dispatch(changeInput(e.target.value))}/>
        </form>
    );
};

export default TodoAdd;