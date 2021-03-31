import PropType from "prop-types"

const Button = ({ color, text, onClick }) => {


    return (
        <button 
            onClick={onClick}
            className="btn"
            style={{backgroundColor: color}}
            >
            {text} 
        </button>
    )
}

Button.defaultProps = {
    text: 'Add',
    color: 'steelblue'
}

Button.propType = {
    color: PropType.string,
    text: PropType.string,
    onClick: PropType.func
}

export default Button