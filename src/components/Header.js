const Header = (props) => {
    return (
        <header className={'border bg-light text-center'}>
            <h1 className={'text-primary'}>Todos App</h1>
            <h2 className={'text-muted'}>{props.subtitle}</h2>
        </header>
    );
};

export default Header;