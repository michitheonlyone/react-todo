import PropTypes from 'prop-types';

const Button = ({onClick, text, color, css}) => {
    return (
        <button onClick={onClick} className={'btn btn-'+ color + (css ? ' ' + css : '')}>{text}</button>
    );
};

Button.defaultProps = {
    color: 'primary',
    css: '',
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button;