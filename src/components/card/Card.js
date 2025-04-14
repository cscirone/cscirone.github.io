import { Paper } from "@mui/material";

function Card({ children, className }) {
    return (
        <Paper variant="outlined" className={`custom-card p-4 sm:p-10 flex flex-col gap-4 ${className}`}>
            {children}
        </Paper>
    )
}

export default Card;
