import { Box, Button, Input, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import ReactFileBase64 from 'react-file-base64'

import db from '../../api'
const Form = props => {


    const renderInput = ({ input, label, meta }) => {
        return (
            <Stack display='flex' direction='column'>
                <Typography variant='h6'>{label}</Typography>
                <Input {...input} />
            </Stack>
        )
    }


    const renderDescription = ({ input, label, meta }) => {
        return (
            <Stack display='flex' direction='column'>
                <Typography variant='h6'>{label}</Typography>
                <TextField {...input} />
            </Stack>
        )
    }




    const onSubmit = (values) => {

        db.post('/post', { ...values })


    }
    //action='http://localhost:4000/post' method='POST'
    return (
        <Box>
            <Paper sx={{ width: '80%', marginTop: 8, borderRadius: 25, padding: 8 }}>
                <form onSubmit={props.handleSubmit(onSubmit)}>

                    <Stack display='flex' direction='column' spacing={4}>

                        <Field name='name' label='Enter Product Name' component={renderInput} />
                        <Field name='description' label='Enter Product Description' component={renderDescription} />

                        <Stack display='flex' direction='column'>
                            <Typography variant='h6'>Image</Typography>
                            <ReactFileBase64 onDone={onSubmit} type='file' />
                        </Stack>


                        <Field name='category' label='Enter Product Category' component={renderInput} />
                        <Button variant='contained' type='submit' fullWidth sx={{ backgroundColor: 'theme.backgroundColor' }} color={'error'}>Submit</Button>
                    </Stack>
                </form>
            </Paper>
        </Box>
    )
}




export default reduxForm({ form: 'Add Item' })(Form)