import * as React from 'react';
import { connect } from 'react-redux';
import { darkMode, lightMode } from '../../actions'
import { ModeNight, WbSunny } from '@mui/icons-material'





const SwitchMode = ({ mode, lightMode, darkMode }) => {


    const handleMode = (mode) => {
        switch (mode) {
            case 'dark':

                return <ModeNight onClick={() => lightMode()} sx={{ color: '#FFF89C' }} fontSize='medium' />
            case 'light':

                return <WbSunny onClick={() => darkMode()} sx={{ color: 'orange' }} fontSize='medium' />
            default:
                return;
        }
    }

    return (
        <>
            {handleMode(mode)}
        </>
    );
}

const mapStateToProps = state => {
    const { mode } = state
    return {
        mode
    }
}
export default connect(mapStateToProps, { darkMode, lightMode })(SwitchMode)