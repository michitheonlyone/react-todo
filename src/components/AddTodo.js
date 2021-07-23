import {Form} from "react-bootstrap";
import {useState} from "react";

const AddTodo = ({onAdd}) => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!title) {
            alert('Enter a Title!')
            return
        }

        onAdd({ title, body })

        setTitle('')
        setBody('')
    }

    return (
        <Form id={"add-todo"} onSubmit={onSubmit}>
            <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title..." />
            <Form.Control value={body} onChange={(e) => setBody(e.target.value)} as="textarea" rows={2} placeholder={'Body...'} />
        </Form>
    );
};

export default AddTodo;