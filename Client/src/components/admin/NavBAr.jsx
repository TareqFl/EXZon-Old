import React from 'react'

import { AppBar, Box, Button, Stack, styled, useTheme } from '@mui/material'

const NavBar = () => {


    const StyledToolBar = styled('div')(({
        display: 'flex',
        justifyContent: 'space-between',
        direction: 'row',
        padding: 8,
        gap: 8
    }))

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <StyledToolBar>
                    <Stack display='flex' justifyContent='start' direction='row' spacing={1}>
                        <Button variant='text' sx={{ color: 'white' }}>All Products</Button>
                        <Button variant='text' sx={{ color: 'white' }}>Add Product</Button>
                    </Stack>
                    <Button variant='contained' color='error'>Logout</Button>
                </StyledToolBar>
            </AppBar>
        </Box>
    )
}

export default NavBar