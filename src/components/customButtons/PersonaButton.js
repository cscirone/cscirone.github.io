import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

import './PersonaButton.css';

const StyledButton = styled(Button)(({ theme }) => ({
    background: 'transparent',
    border: 'none',
    fontFamily: 'Earwig, sans-serif',
    fontSize: '2em',
    cursor: 'pointer',
    outline: 'none',
    padding: 0,
    minWidth: 'auto',
    textTransform: 'none',
    '&:hover': {
        background: 'transparent',
    },
    '& .MuiButton-startIcon': {
        margin: 0,
    },
    '& .MuiButton-endIcon': {
        margin: 0,
    },
}));

export default function PersonaButton({
    children,
    tiltDirection,
    className = '',
    onClick,
    ...props
}) {
    return (
        <StyledButton
            className={`persona-button persona-button-${tiltDirection} ${className}`}
            onClick={onClick}
            {...props}
        >     
            <div className="shape-wrapper">
                <div className="shape primary-fill jelly">
                    <svg x="0px" y="0px" viewBox="0 0 108.1 47" enable-background="new 0 0 108.1 47">
                        <polygon points="29.5,8.5 150.7,0 108.1,32.7 3.1,47 "/>
                    </svg>
                </div>

                <div className="shape secondary-fill jelly">
                    <svg x="0px" y="0px" viewBox="0 0 108.1 47" enable-background="new 0 0 108.1 47">
                        <polygon points="0.3,17 125.1,0 68.8,45.6 24.3,39 "/>
                    </svg>
                </div>
            </div>

            <span>{children}</span>
        </StyledButton>
    );
};
