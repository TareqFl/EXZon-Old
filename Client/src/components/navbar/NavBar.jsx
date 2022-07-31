import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import history from '../../history'

import { useDispatch, useSelector } from 'react-redux'
import { signIn, signOut, openModal, closeModal, openSideBar, closeSideBar, removeItem, calculateAmountSum, deleteCart, darkMode, lightMode } from '../../actions'

import SwitchMode from './SwitchMode'
import AppDrawer from './AppDrawer'
import StripeCheckout from 'react-stripe-checkout';


import {
    Box, AppBar,
    Typography, Stack,
    Badge, Button,
    Avatar, Container,
    IconButton, useTheme,
    Fade, Modal, ListItem,
    ListItemAvatar, ListItemText,
    Paper, styled
} from '@mui/material'

import { ShoppingCart, Search, Menu, LocalMall } from '@mui/icons-material';
import { FixedSizeList } from 'react-window'


const NavBar = () => {

    const { isSignedIn, modal, sideBar, cartItems, totalAmount, cartId, mode } = useSelector((state) => state)
    const dispatch = useDispatch()

    const theme = useTheme();

    useEffect(() => {
        dispatch(calculateAmountSum(cartItems))
    }, [cartItems])
    //stripe token
    const onToken = async token => {
        try {
            const response = await axios({
                url: 'http://localhost:4000/payment',
                method: "post",
                data: {
                    amount: totalAmount * 100,
                    token
                }
            })
            if (response.status === 200) {
                dispatch(deleteCart(cartId))
                history.go(0)

            }
        } catch (error) {
            console.log(error);
        }
    }

    // custom style for modal
    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'theme.background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    // render cart rows
    const renderRow = ({ index, style }) => {

        const { name, price, image } = cartItems[index] || {};

        return (
            <ListItem style={style} key={name} component='div'>
                <ListItemAvatar sx={{ width: '25%' }}>
                    <img src={image} alt={name} style={{ width: '100%' }} />
                </ListItemAvatar>
                <ListItemText primary={name} secondary={`${price}$`} sx={{ textAlign: 'center', width: '25%' }} />
                <Button variant='contained' color='error' size='small' onClick={() => dispatch(removeItem(cartItems[index], 'id1'))}>Remove</Button>
            </ListItem>
        )
    }

    //////////////////////////////////////////////////////////



    // custome appbar toolbar
    const StyledToolBar = styled('div')({
        display: 'flex',
        direction: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        whiteSpace: '8px',
        paddingLeft: '8px',
        paddingRight: '8px',
    })

    // render nav items if signed in
    // const renderUser = () => {
    //     if (isSignedIn) {
    //         return (
    //             <Stack direction={'row'} display='flex' alignItems={'center'} spacing={2} sx={{ display: { xs: 'none', lg: 'flex' } }}>
    //                 <Avatar />
    //                 <Button variant='text' sx={{ display: { sx: 'none', lg: 'block' }, color: theme.palette.mode === 'dark' ? 'white' : 'black' }} onClick={() => dispatch(signOut())}>LogOut</Button>
    //             </Stack>
    //         )
    //     }
    //     return (
    //         <>
    //             <Button variant='text' sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black', display: { xs: 'none', lg: 'block' } }} onClick={() => dispatch(signIn())}>Login</Button>
    //         </>
    //     )
    // }


    return (<>
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position='fixed' sx={{ color: 'black', padding: '10px 20px 6px 20px' }} color='action' variant={theme.palette.mode === 'dark' ? 'dense' : 'elevation'}>
                <StyledToolBar>
                    <Stack display={'flex'} direction='row' alignItems={'center'} mr={'4px'}>
                        <Box>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 1, display: { xs: 'block', lg: 'none' } }}
                                onClick={() => dispatch(openSideBar())}>
                                <Menu style={{ color: theme.palette.mode === 'dark' ? 'white' : 'black' }} />
                            </IconButton>
                        </Box>

                        <Link
                            style={{ textDecoration: 'none', color: theme.palette.mode === 'dark' ? 'white' : 'black' }}
                            to='/'>
                            <Typography
                                variant="h5"
                                sx={{ flexGrow: 1 }}
                                style={{ color: theme.palette.mode === 'dark' && 'white' }}>
                                <span style={{ color: 'red' }}>EX</span>-Zon
                            </Typography>
                        </Link>
                    </Stack>

                    <Stack display='flex' direction='row' alignItems='center' sx={{ display: { xs: 'none', lg: 'flex' } }} width='400px'>
                        <input name='search' placeholder='Search' style={{ borderRadius: '8px 0 0 8px', borderRight: 'none', width: '95%' }} autoComplete='off' />
                        <Search color='error' fontSize='large' sx={{ borderRadius: '0 8px 8px 0', backgroundColor: 'gray', borderLeft: 'none', maxHeight: '29px' }} />
                    </Stack>

                    <Box>
                        <Stack direction={'row'} spacing={2} justifyContent={'space-between'} alignItems='center' mr={'4px'}>
                            <SwitchMode />

                            <Badge badgeContent={cartItems.length} color="error" variant='standard'>
                                <ShoppingCart onClick={() => dispatch(openModal())} color='action' />
                            </Badge>

                            {/* render when user signs in */}
                            {/* {renderUser()} */}
                        </Stack>
                    </Box>
                </StyledToolBar>
            </AppBar>
            <Modal
                open={modal}
                onClose={() => dispatch(closeModal())}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={modalStyle} sx={{ borderRadius: '15px' }}>
                    <Paper sx={{ bgColor: 'theme.backgroundColor', borderRadius: '15px' }}>
                        <Stack display='flex' direction='row-reverse' spacing={1} p={4} justifyContent='center' alignItems='center'>
                            <Typography variant='h5'>My Cart</Typography>
                            <LocalMall fontSize='large' color='error' />
                        </Stack>
                        <Stack display='flex' direction='row' justifyContent='center'>
                            <Typography paragraph textAlign='center'>total:</Typography>
                            <Typography paragraph textAlign='center'>{totalAmount}$</Typography>
                        </Stack>

                        <FixedSizeList
                            height={400}
                            width='auto'
                            itemSize={130}
                            itemCount={cartItems.length}
                            overscanCount={5}>
                            {renderRow}
                        </FixedSizeList>
                        <StripeCheckout
                            stripeKey='pk_test_51LH8TABEvWoKMFurz4SljKiowCUxf7dZq4fLEln06ZSOVlwQHys0ov9RPDp5beK4zJMToIx5DyfbkvnPPm2oJFll00t4IvxejA'
                            name='EX-Zon'
                            currency='USD'
                            description='Your Cart Items'
                            billingAddress
                            shippingAddress
                            amount={totalAmount * 100}
                            token={onToken}
                            allowRememberMe={true}
                        >
                            <Button variant='contained' color='error' sx={{ width: '100%', borderRadius: '0 0 15px 15px' }}>Pay now</Button>
                        </StripeCheckout>
                    </Paper>
                </Box>
            </Modal>
        </Box>

        {/* AppDrawer component */}
        <AppDrawer
            // status={isSignedIn}
            open={sideBar}
            close={() => dispatch(closeSideBar())}
        // signIn={() => dispatch(signIn())}
        // signOut={() => dispatch(signOut())}
        />
        <Box sx={{ display: { xs: 'block', md: 'none' }, marginTop: '20%' }} />
        <Container sx={{ marginTop: 7, display: { xs: 'none', md: 'block' } }}>
            <Fade
                in={true}
                timeout={3000}
            >
                <Box display='flex' direction='row' justifyContent={'space-between'} spacing={2} sx={{ border: theme.palette.mode === 'dark' ? 'none' : '1px inset gray', display: { xs: 'none', lg: 'flex' }, borderTop: 'none', paddingTop: '8px' }} >
                    <Button variant='text' color='inherit' size='small' >Watch/Mobile</Button>
                    <Button variant='text' color='inherit' size='small' >Laptop</Button>
                    <Button variant='text' color='inherit' size='small' >Monitor/Desktop Computer</Button>
                    <Button variant='text' color='inherit' size='small' >MotherBoard /Hardware</Button>
                    <Button variant='text' color='inherit' size='small' >Accessory</Button>
                    <Button variant='text' color='inherit' size='small' >Campains</Button>
                </Box>
            </Fade>
        </Container>
    </>)
}

export default NavBar