import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({ type, text, icon, onButtonClick}) {
    return (
        <button className={`button button-${type}`}
                onClick={onButtonClick}>
            {icon && <FontAwesomeIcon icon={icon} />}
            {text}
        </button>
    );
}

export default Button;