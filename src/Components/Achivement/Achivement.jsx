import './achivement.css'

// Dark Mood
import { useContext } from "react";
import { themeContext } from '../../Context'


function Achivement({ year, title, txt }) {

    // Dark Mood
    const theme = useContext(themeContext)
    const darkMood = theme.state.darkMood;

    return (
        <div className='achivement' style={{ color: darkMood ? 'black' : '' }}>
            <div className='circle'>{year}</div>
            <span style={{ color: darkMood ? 'white' : '' }}>{title}</span>
            <span>{txt}</span>
        </div>
    )
}

export default Achivement