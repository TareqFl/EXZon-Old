import React, { useEffect } from 'react'

import history from '../../history'
import { connect } from 'react-redux'
import { fetchAll, addItem, fetchCart, getCartId, getCartCode, initiateCart } from '../../actions'

import { useCookies } from "react-cookie";
import nextId from "react-id-generator";


import { Box, Button, Container, Grid, Paper, Stack, Typography, useTheme, } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material';
import Slide from './Slide'
import Footer from './Footer';

const HomePage = ({ addItem, fetchAll, allProducts, cartItems, fetchCart, getCartId, cartId, getCartCode, initiateCart }) => {

    const theme = useTheme()

    const [cookies, setCookie, removeCookie] = useCookies([''])

    const { products } = allProducts

    const cartCode = cookies.macaroon ? cookies.macaroon.deviceId : null;

    const checkCookie = () => {
        const deviceId = nextId()
        if (cookies.macaroon) {
            getCartId(cookies.macaroon.deviceId)
            if (!cartItems.length) {
                getCartCode(cartId)
            }
        }
        if (!cookies.macaroon) {
            setCookie('macaroon', { deviceId }, {
                path: '/',
                maxAge: '86400'
            })
            initiateCart(deviceId)
            getCartCode(cartId)
            window.location.reload()
        }
        if (cookies.undefiend) {
            removeCookie('undefined')
        }
    }


    //fetchCart
    const fetchAllItems = () => {
        if (!cartItems.length) {
            fetchCart(cookies.macaroon.deviceId)
        }

    }
    useEffect(() => {
        fetchAll()
        checkCookie()
        fetchAllItems()

    }, [cookies])




    //render all products cards desktop
    const renderProducts = () => {

        if (products) {
            return products.map((item, i) => {
                return (
                    <Grid key={i} item>
                        <Paper elevation={24} sx={{ bgcolor: 'theme.backgroundColor', padding: '4px', width: 200, height: '100%' }} >
                            <Stack display={'flex'} direction='column' justifyContent={'center'}>
                                <Box onClick={() => history.push(`/products/${item.name}`)}>
                                    <img
                                        style={{ height: 185, width: 185 }}

                                        src={item.image}
                                        alt={item.name}
                                    />
                                </Box>
                                <Box>
                                    <Stack display={'flex'} direction='column' justifyContent={'center'}  >

                                        <Typography paragraph textAlign='center' >{item.description.substring(0, 50)}...</Typography>

                                        <Button variant='text' size='large' color='error'>{item.price}$</Button>
                                    </Stack>
                                </Box>

                                <Box flex={1}>
                                    <Button sx={{ width: '100%' }} endIcon={<AddShoppingCart />} variant='contained' size='large' onClick={() => addItem(item, cartCode)} color='error'>add to cart</Button>
                                </Box>

                            </Stack>
                        </Paper>
                    </Grid>
                )
            })
        }
    }

    return (
        <React.Fragment>
            <Slide />

            <Box mt={2}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ bgColor: 'theme.backgroundColor' }} elevation={8} >
                            <Box>
                                <img src='./assets/laptop1.webp' alt='laptop' style={{ maxWidth: '100%' }} />
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ bgColor: 'theme.backgroundColor' }} elevation={8}>
                            <Box>
                                <img src='./assets/laptop2.webp' alt='laptop' style={{ maxWidth: '100%' }} />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            {/* Products Grid */}
            <Container maxWidth='md' sx={{ mt: 4 }}>
                <Grid container justifyContent={'center'} spacing={1}>
                    {renderProducts()}
                </Grid>
            </Container>
            <Footer />
        </React.Fragment>
    )
}
const mapStateToProps = state => {
    const { allProducts, cartItems, cartId, } = state;

    return {
        allProducts,
        cartItems,
        cartId,

    }
}

export default connect(mapStateToProps, { fetchAll, addItem, fetchCart, getCartId, getCartCode, initiateCart })(HomePage)