import {Button} from "react-bootstrap";

const Header = () => {

    return (
        <header className={'border bg-light p-2 text-center d-flex justify-content-between'}>
            <h1 className={'text-primary'}>Todos App</h1>
            <Button variant="success" type={'submit'} form={'add-todo'}>Add</Button>
        </header>
    );
};

export default Header;