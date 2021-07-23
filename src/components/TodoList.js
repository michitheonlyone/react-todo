import Button from "./bs-components/Button";

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
                        <Button onClick={() => onToggle(todo.id)} color={(todo.done) ? 'success' : 'secondary'} text={'Done'} css={'btn-sm me-1'} />
                        <Button onClick={() => onDelete(todo.id)} color={'danger'} text={'Delete'} css={'btn-sm'} />
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;