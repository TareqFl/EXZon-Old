import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import Form from './Form'

const AddProduct = () => {
    return (
        <Stack display='flex' justifyContent='space-between' direction='row'>
            <Box flex={1}>
                recently added
            </Box>
            <Box flex={8}>
                <Form />
            </Box>
        </Stack>
    )
}

export default AddProduct