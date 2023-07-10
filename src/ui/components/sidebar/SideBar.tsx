import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

export const SideBar = ({ drawerWidth = 240 }) => {


    return (
        <Box className='sidebar'
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent' // temporary
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        <h3>titulo</h3>
                    </Typography>
                </Toolbar>
                <Divider />

                <List className='list' style={{ flexDirection: 'column' }}>
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link mx-3 ${isActive ? 'active' : ''}`}
                        to="/shop"
                    >

                        Shop
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link mx-3 ${isActive ? 'active' : ''}`}
                        to="/checkout"
                    >
                        Checkout
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link mx-3 ${isActive ? 'active' : ''}`}
                        to="/payment"
                    >
                        Payment
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link mx-3 ${isActive ? 'active' : ''}`}
                        to="/userpanel"
                    >
                        User Panel
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link mx-3 ${isActive ? 'active' : ''}`}
                        to="/auth/login"
                    >
                        Login
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link mx-3 ${isActive ? 'active' : ''}`}
                        to="/product"
                    >
                        ProductPage
                    </NavLink>
                </List>

            </Drawer>

        </Box>
    )
}