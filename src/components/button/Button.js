import './Button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Button({ type, text, icon, onButtonClick}) {

    let buttonClass;
    switch (type) {
        case 'tab':
            buttonClass = 'tab';
            break;
        case 'tab-active':
            buttonClass = 'tab active';
            break;
        default:
            buttonClass = `button button-${type}`;
    }

    return (
        <button className={buttonClass}
                onClick={onButtonClick}>
            {icon && <FontAwesomeIcon icon={icon} />}
            {text}
        </button>
    );
}

export default Button;