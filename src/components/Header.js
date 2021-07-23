import Button from "./bs-components/Button";

const Header = () => {

    const onClick = () => {
        console.log('Clicked');
    }

    return (
        <header className={'border bg-light p-2 text-center d-flex justify-content-between'}>
            <h1 className={'text-primary'}>Todos App</h1>
            <Button text={'Add'} color={'success'} onClick={onClick} />
        </header>
    );
};

export default Header;