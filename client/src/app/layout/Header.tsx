import { ShoppingCart } from "@mui/icons-material"
import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' },
]

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }
]

const navStyles = {
    color: 'inherit',
    typography: 'h6',
    textDecoration: 'none',
    '&:hover': {
        color: 'grey.500'
    },
    '&.active': {
        color: 'text.secondary'
    }
}

export default function Header() {
    return (
        <AppBar position="static" sx={{ mb: 0, p: 0 }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box display='flex' alignItems='center'>
                    <Typography variant="h6" component={NavLink}
                        to="/"
                        sx={{ color: 'inherit' }}>
                        RE-STORE
                    </Typography>
                </Box>

                <List sx={{ display: 'flex' }}>
                    {midLinks.map(({ title, path }) => (
                        <ListItem
                            key={path}
                            component={NavLink}
                            to={path}
                            sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                 <Box display='flex' alignItems='center'>
                <IconButton size='large' edge='start' color='inherit' sx={{ mr: 2 }}>
                    <Badge badgeContent='4' color='secondary'>
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <List sx={{ display: 'flex' }}>
                    {rightLinks.map(({ title, path }) => (
                        <ListItem
                            key={path}
                            component={NavLink}
                            to={path}
                            sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}