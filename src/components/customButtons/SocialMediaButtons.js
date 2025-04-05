import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';

const LinkedInButton = styled(Button)(({ theme }) => ({
    color: '#0a66c2',
    borderColor: '#0a66c2',
    '&:hover': {
        backgroundColor: alpha('#0a66c2', 0.1),
    },
}));

const GitHubButton = styled(Button)(({ theme }) => ({
    color: '#181717',
    borderColor: '#181717',
    '&:hover': {
        backgroundColor: alpha('#181717', 0.1),
    },
}));

export { LinkedInButton, GitHubButton };