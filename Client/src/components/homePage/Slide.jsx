import React from 'react'

import { Box, Fade } from '@mui/material'
import { Carousel } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'



const Slides = () => {



    return (
        <Fade in timeout={1000}>
            <Box>
                <Carousel
                    variant='light'
                    touch
                    fade
                    indicators={false}
                    controls={false}
                >
                    <Carousel.Item>
                        <img
                            className='d-block w-100 h-100'
                            src='./assets/keyboard.webp'
                            alt='ckeyboard' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block w-100 h-100'
                            src='./assets/c2.webp'
                            alt='c2' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-block w-100 h-100'
                            src='./assets/c3.webp'
                            alt='c3' />
                    </Carousel.Item>
                </Carousel>
            </Box>
        </Fade>
    )
}

export default Slides