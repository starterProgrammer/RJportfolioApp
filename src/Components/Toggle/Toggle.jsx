import './toggle.css'

import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { useContext } from "react";
import { themeContext } from '../../Context';

function Toggle() {
    const theme = useContext(themeContext)
    const darkMood = theme.state.darkMood;
    const handleToggle = () => {
        theme.dispatch({ type: 'toggle' })
    }
    return (
        <div className='toggle' onClick={handleToggle}>
            <Moon />
            <Sun />

            <div className='t-button' style={darkMood ? { left: '2px' } : { right: '2px' }}></div>
        </div>
    )
}

export default Toggle