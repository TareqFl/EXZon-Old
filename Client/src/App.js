
import React from 'react'


import { Route, Router, Switch } from 'react-router-dom'
import history from './history'

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'

import NavBar from './components/navbar/NavBar'
import Home from './components/homePage/Home'
import ProductDetails from './components/productPage/ProductDetails'
import { connect } from 'react-redux'




const App = ({ mode }) => {
    const darkTheme = createTheme({
        palette: {
            mode
        }
    })

    return (
        <ThemeProvider theme={darkTheme}>
            <Router history={history}>
                <CssBaseline />
                <NavBar />
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route exact path={'/products/:name'} component={ProductDetails} />
                </Switch>
            </Router>
        </ThemeProvider>
    )
}
const mapStateToProps = state => {
    const { mode } = state
    return {
        mode
    }
}
export default connect(mapStateToProps)(App)


