import { AppBar, Typography } from "@mui/material"

export default function Header() {
    return (
        <AppBar position="static" sx={{mb: 0, p: 2}}>
            <Typography variant="h6">RE-STORE</Typography>
        </AppBar>
    )
}