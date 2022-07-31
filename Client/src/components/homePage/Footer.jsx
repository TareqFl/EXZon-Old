import React from 'react'
import { Box, Button, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import { Apple, Shop } from '@mui/icons-material'
const Footer = () => {
    return (
        <>
            <Paper elevation={12} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Container maxWidth='lg'>
                    <Stack display='flex' direction='row' spacing={1} pt={4} pb={4} mt={4}>

                        <Box flex={2}>
                            <Stack display='flex' direction='column' spacing={4} sx={{
                                borderRadius: 50
                            }} justifyContent='center'>
                                <Typography variant='h4' textAlign='center' color='error'>Download EXZon</Typography>
                                <Paper elevation={24} sx={{ borderRadius: 8 }}>
                                    <Stack display='flex' direction='row' spacing={1}>
                                        <Box width={40} alignSelf='center'>
                                            <Apple sx={{ width: '100%', height: '100%' }} />
                                        </Box>
                                        <Box>
                                            <Typography variant='h6'>Download from</Typography>
                                            <Typography variant='h4'>IOS Store</Typography>
                                        </Box>
                                    </Stack>
                                </Paper>
                                <Paper elevation={24} sx={{ borderRadius: 8 }}>
                                    <Stack display='flex' direction='row' spacing={1}>
                                        <Box width={40} alignSelf='center'>
                                            <Shop sx={{ width: '100%', height: '100%' }} />
                                        </Box>
                                        <Box>
                                            <Typography variant='h6'>Download from</Typography>
                                            <Typography variant='h4'>App Store</Typography>
                                        </Box>
                                    </Stack>
                                </Paper>
                            </Stack>
                        </Box>
                        <Box flex={8}>
                            <Stack display='flex' direction='row' spacing={1}>

                                <Stack display='flex' direction='column' spacing={1} alignItems='center'>
                                    <Typography variant='h4' color='error' textAlign='center'>Discover EXZon</Typography>
                                    <Button variant='text'>Careers</Button>
                                    <Button variant='text'>Technology Careers</Button>
                                    <Button variant='text'>Contact Us</Button>
                                    <Button variant='text'>COvide-18 Announcement</Button>
                                    <Button variant='text'>Social Responsibility Projects</Button>
                                </Stack>

                                <Stack display='flex' direction='column' spacing={1} alignItems='center'>
                                    <Typography variant='h4' color='error' textAlign='center'>Need Help?</Typography>
                                    <Button variant='text'>FAQ</Button>
                                    <Button variant='text'>Protection of personal Data</Button>
                                    <Button variant='text'>Privacy Policy</Button>
                                    <Button variant='text'>Terms & Conditions</Button>
                                    <Button variant='text'>Cookie Policy</Button>
                                </Stack>

                                <Stack display='flex' direction='column' spacing={1} alignItems='center'>
                                    <Typography variant='h4' color='error' textAlign='center'>Become our Business Partner</Typography>
                                    <Button variant='text'>Become a Franchise</Button>
                                    <Button variant='text'>Rent Your Warehouse</Button>
                                    <Button variant='text'>Beomce EXZon local business</Button>
                                </Stack>

                            </Stack>
                        </Box>

                    </Stack>
                </Container>
            </Paper>


            <Stack display='flex' direction='column' spacing={2} sx={{
                borderRadius: 50, display: { xs: 'flex', md: 'none' }
            }} justifyContent='center' mt={4} alignItems='center'>

                <Typography variant='h4' textAlign='center' color='error'>Download EXZon</Typography>

                <Paper elevation={24} sx={{ borderRadius: 8, width: '60%' }}>
                    <Stack display='flex' direction='row' spacing={1} justifyContent={'center'}>
                        <Box width={80} alignSelf='center' >
                            <Apple sx={{ width: '100%', height: '100%' }} />
                        </Box>
                        <Box>
                            <Typography variant='h6'>Download from</Typography>
                            <Typography variant='h4'>IOS Store</Typography>
                        </Box>
                    </Stack>
                </Paper>

                <Paper elevation={24} sx={{ borderRadius: 8, width: '60%' }}>
                    <Stack display='flex' direction='row' spacing={1} justifyContent={'center'}>
                        <Box width={80} alignSelf='center'>
                            <Shop sx={{ width: '100%', height: '100%' }} />
                        </Box>
                        <Box>
                            <Typography variant='h6'>Download from</Typography>
                            <Typography variant='h4'>App Store</Typography>
                        </Box>
                    </Stack>
                </Paper>

            </Stack>


        </>
    )
}

export default Footer