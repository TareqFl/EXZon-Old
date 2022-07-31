import React, { useEffect } from 'react'
import history from '../../history'
import { Link } from 'react-router-dom'

import { useCookies } from 'react-cookie'


import { connect } from 'react-redux';
import { fetchAll, fetchProduct, productGallery, addItem, fetchCart, } from '../../actions'
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material'

import Marquee from "react-fast-marquee";




const Product = ({ products, fetchAll, fetchProduct, match, product, gallery, cartItems, productGallery, addItem, fetchCart }) => {


    const [cookie, getAllCookies] = useCookies('')

    const fetchAllItems = () => {

        if (!cartItems.length) {
            fetchCart(cookie.macaroon.deviceId)

        }
    }
    useEffect(() => {
        getAllCookies()
        fetchAll()
        fetchCart()
        fetchProduct(match.params.name)
        fetchAllItems()

    }, [history.location.pathname])


    const cartCode = cookie && cookie.macaroon.deviceId


    // this.reloadPage(item)
    const rerenderPage = (item) => {

        history.push(`/products/${item.name}`)
        history.go(0)
    }

    //render Marquee items 
    const renderMarqueeItems = () => {
        if (products) {

            return products.map((item, i) => {
                return (
                    <Link to={`/products/${item.name}`} key={i}>
                        <Paper
                            onClick={() => rerenderPage(item)}

                            sx={{
                                bgColor: 'theme.backgroundColor',
                                borderRadius: '30px',
                                ml: 1,
                                mr: 1,

                            }} >
                            <img
                                wdith='185px'
                                height='185px'
                                src={item.image}
                                alt={item.name} />
                        </Paper>
                    </Link>
                )
            })
        }

    }


    const renderGallery = (product) => {
        if (product) {
            return product.slides.map((slide, i) => {
                return (
                    <Paper
                        key={i}
                        sx={{
                            bgColor: 'theme.backgroundColor',
                            borderRadius: '25px',
                            width: '25%'
                        }}
                        elevation={24}
                        onClick={() => productGallery(slide)}>
                        <img
                            style={{ width: '100%' }}
                            src={slide}
                            alt='VivoWatch'
                        />
                    </Paper>
                )
            })
        }
    }




    return (
        <>
            <Container maxWidth='lg' sx={{ mt: '5%', display: { xs: 'none', sm: 'flex' } }}>
                <Stack display='flex' direction={'row'} justifycontent='space-between' spacing={2} alignItems='start'>

                    {/* display product */}

                    <Box sx={{ width: '40%' }}>
                        <Stack display='flex' direction={'column'} alignItems='center'>

                            <Box width='100%'>
                                <Paper sx={{ bgColor: 'theme.backgroundColor', borderRadius: '25px' }} elevation={24}>
                                    <Box>
                                        <img

                                            width='100%'
                                            src={gallery || (product && product.slides[0]) || (product && product.image)}
                                            alt={product && product.name}
                                        />
                                    </Box>
                                </Paper>
                            </Box>

                            {/* display products gallery */}

                            <Box mt={2}>
                                <Stack display={'flex'} direction={'row'} spacing={1}>
                                    {renderGallery(product)}
                                </Stack>
                            </Box>

                        </Stack>
                    </Box>


                    {/* display product description */}

                    <Box sx={{ width: '60%' }}>
                        <Stack display='flex' direction={'column'} >
                            <Typography variant='h4'>{product && product.name}</Typography>
                            <Typography paragraph>Details:</Typography>
                            <Typography variant='string' textAlign={'start'} >{product && product.description}</Typography>

                            <Box mt={2}>
                                <Button variant='outlined' color='error'>{product && product.price}$</Button>
                            </Box>
                            <Box mt={2} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                                <Stack display={'flex'} direction={'row'} justifyContent='center' spacing={0.5}>
                                    <Button variant='contained' color='error' onClick={() => addItem(product, cartCode)}>add to cart</Button>
                                </Stack>
                            </Box>

                        </Stack>
                    </Box>
                </Stack>
            </Container>

            {/* display for mobile */}

            <Container sx={{ display: { xs: 'flex', sm: 'none' }, marginTop: '25%' }}>

                {/* display product */}

                <Stack display={'flex'} direction='column'>
                    <Box >
                        <Paper sx={{ bgColor: 'theme.backgroundColor', borderRadius: '25px' }} elevation={24}>
                            <img
                                style={{ width: '100%' }}
                                src={gallery || (product && product.slides[0]) || (product && product.image)}
                                alt={product && product.name}
                            />
                        </Paper>
                    </Box>


                    {/* display product gallery */}

                    <Box mt={2}>
                        <Stack display={'flex'} direction={'row'} spacing={1}>
                            {renderGallery(product)}

                        </Stack>

                        <Stack mt={2} display={'flex'} direction='row' spacing={1} justifyContent='space-between' alignItems={'center'}>
                            <Box>
                                <Button variant='outlined' size='large' color='error'>{product && product.price}$</Button>
                            </Box>

                            <Stack display={'flex'} direction='row' spacing={1}>

                                <Box>
                                    <Button variant='contained' color='error' onClick={() => addItem(product, cartCode)} size='small'>add to cart</Button>
                                </Box>
                            </Stack>

                        </Stack>

                    </Box>


                    {/* display product description */}

                    <Box mt={2}>
                        <Stack display='flex' direction={'column'} >
                            <Typography variant='h4'>{product && product.name}</Typography>
                            <Typography paragraph>Details:</Typography>
                            <Typography
                                variant='string'
                                textAlign={'start'} >{product && product.description}</Typography>

                        </Stack>
                    </Box>

                </Stack>
            </Container>


            {/* product image slides */}
            <Container sx={{ mt: 12 }} maxWidth='xl'>
                <Typography variant='h5'>Users also searched for</Typography>
                <Marquee
                    pauseOnHover
                    speed={50}
                    gradient={false}
                >
                    {renderMarqueeItems()}
                </Marquee>
            </Container>
        </>
    )

}
const mapStateToProps = state => {
    const { products, product } = state.allProducts

    const { gallery, cartCode, cartItems } = state

    return {
        products,
        product,
        gallery,
        cartCode,
        cartItems
    }
}
export default connect(mapStateToProps, { fetchAll, fetchProduct, productGallery, addItem, fetchCart })(Product)