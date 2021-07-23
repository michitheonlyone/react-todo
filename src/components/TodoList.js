import {Button} from "react-bootstrap";

const TodoList = ({todos, onDelete, onToggle}) => {
    return (
        <ul className={'list-group'}>
            {todos.map((todo) => (
                <li key={todo.id.toString()} className={'list-group-item d-flex justify-content-between'}>
                    <div className={(todo.done) ? '' : 'text-decoration-line-through'}>
                        <h5>{todo.title}</h5>
                        <p>{todo.body}</p>
                    </div>
                    <div>
                        <Button variant={(todo.done) ? 'success' : 'secondary'} size={'sm'} className={'me-2'} onClick={() => onToggle(todo.id)}>{(todo.done) ? 'Done' : 'Undone'}</Button>
                        <Button variant={'danger'} size={'sm'} onClick={() => onDelete(todo.id)}>Delete</Button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;