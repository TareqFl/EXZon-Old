import React from 'react'
import { Avatar, Button, Divider, Drawer, IconButton, List, styled, useTheme } from '@mui/material'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'


const AppDrawer = props => {

    const theme = useTheme()

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));

    //sign in user
    const signIn = () => props.signIn()


    //sign out user
    const signOut = () => props.signOut()


    // render for mobiles 
    const userSideBar = () => {
        if (props.status) {
            return (
                <>
                    <List>
                        <Avatar />
                    </List>
                    <List><Button variant='text' sx={{ display: { sx: 'none', lg: 'block' }, color: theme.palette.mode === 'dark' ? 'white' : 'black' }} onClick={signOut}>LogOut</Button></List>
                </>
            )
        }
        return (
            <>
                <List>
                    <Button variant='text' sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black', display: { xs: 'block', lg: 'none' } }} onClick={signIn}>Login</Button>
                </List>
            </>
        )
    }

    const closeDrawer = () => props.close(false)

    return (
        <>
            <Drawer
                variant="persistent"
                anchor="left"
                open={props.open}
            >
                <DrawerHeader>
                    <IconButton onClick={closeDrawer}>
                        {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <input name='search' placeholder='Search...' />
                </List>

                {/* {userSideBar(Array)} */}

                <List>
                    <Button variant='text' color='inherit' size='small'>Watch/Mobile</Button>
                </List>

                <List>
                    <Button variant='text' color='inherit' size='small'>Laptop</Button>

                </List>

                <List>
                    <Button variant='text' color='inherit' size='small'>Monitor/PC</Button>

                </List>

                <List>
                    <Button variant='text' color='inherit' size='small'>MotherBoard/Hardware</Button>

                </List>

                <List>
                    <Button variant='text' color='inherit' size='small'>Accessory</Button>
                </List>

                <List>
                    <Button variant='text' color='inherit' size='small'>campains</Button>
                </List>
            </Drawer>
        </>
    )
}

export default AppDrawer