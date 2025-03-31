import { Paper } from "@mui/material";

function Card({ children }) {
    return (
        <Paper variant="outlined" className="p-4 sm:p-10 flex flex-col gap-4">
            {children}
        </Paper>
    )
}

export default Card;
