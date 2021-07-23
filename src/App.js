import {useState} from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {

    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Task One",
            body: "Todo the first one",
            done: false
        },
        {
            id: 2,
            title: "Task Two",
            body: "Todo the second one",
            done: true
        }
    ])

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? {
            ...todo, done: !todo.done
        }: todo
        ))
    }

    return (
        <div className={"container-fluid"}>
            <Header />
            <AddTodo />
            <div className={'my-3'}>
            {todos.length > 0 ?
                <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo}/> :
                <p className={'alert alert-success text-center lead fw-bold'}>Yay, you're done! ;)</p>
            }
            <a href={'https://youtu.be/w7ejDZ8SWv8?t=3721'}>Tutorial hier!</a>
            </div>
        </div>
    );
}

export default App;
