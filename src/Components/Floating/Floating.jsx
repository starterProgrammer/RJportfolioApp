import './floating.css'
// Dark Mood
import { useContext } from "react";
import { themeContext } from '../../Context'

function Floating({ image, txt1, txt2 }) {

    // Dark Mood
    const theme = useContext(themeContext)
    const darkMood = theme.state.darkMood;

    return (
        <div className='floatingDiv'>
            <img src={image} alt="" />
            <span style={{ color: darkMood ? 'black' : '' }}>
                {txt1}
                <br />
                {txt2}
            </span>
        </div>
    )
}

export default Floating