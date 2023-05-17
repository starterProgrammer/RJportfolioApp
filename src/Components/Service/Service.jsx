import './service.css'
import humble from '../../img/humble.png'
import glasses from '../../img/glasses.png'
import heartemoji from '../../img/heartemoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Resume from '../../img/amazon.png'
// Dark Mood
import { useContext } from "react";
import { themeContext } from '../../Context'

function Service() {


    // Dark Mood
    const theme = useContext(themeContext)
    const darkMood = theme.state.darkMood;


    return (
        <div className='service'>
            <div className='s-left'>
                <span style={{ color: darkMood ? 'white' : '' }}>my awesome</span>
                <span>service</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil dicta repellat quidem! Esse, aliquam tenetur.
                </span>

                <a href={Resume} download>
                    <button className='button s-button'>
                        Download Csv
                    </button>
                </a>

                <div className="blur s-blur"></div>
            </div>

            <div className='s-right'>
                <div className='f-1'>
                    <FloatingDiv image={heartemoji} title="Design"
                        txt="Adobe Xd,Figma,Adobe Photoshop,Adobe Encoder" />
                </div>

                <div className='f-2'>
                    <FloatingDiv image={glasses} title="Devloper"
                        txt="Html,Css3,Javascript,React,React Native" />
                </div>

                <div className='f-3'>
                    <FloatingDiv image={humble} title="UI/UX"
                        txt="Adobe Xd,Figma,Adobe Photoshop,Adobe Encoder" />
                </div>
            </div>

            {/* Blur Dives */}
            <div className='blur s-blur2'></div>
        </div>
    )
}

export default Service