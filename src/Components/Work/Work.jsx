import './work.css'
import fiverr from '../../img/fiverr.png'
import facebook from '../../img/facebook.png'
import amazon from '../../img/amazon.png'
import shopify from '../../img/shopify.png'
import upwork from '../../img/upwork.png'

// Dark Mood
import { useContext } from "react";
import { themeContext } from '../../Context'

// Animation 
import { motion } from "framer-motion";


function Work() {
    // Dark Mood
    const theme = useContext(themeContext)
    const darkMood = theme.state.darkMood;

    return (
        <div className='work' id="work">
            <div className='w-left'>
                <span style={{ color: darkMood ? 'white' : '' }}>works for all these</span>
                <span>brand & clients</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Totam, et corrupti. Inventore obcaecati, dolor
                    illo vero molestias voluptates dolores perspiciatis.
                </span>

                <button className='button s-button'>
                    Hire Me
                </button>

                <div className="blur s-blur"></div>
            </div>

            <div className='w-right'>

                <motion.div
                    initial={{ rotate: 90 }}
                    whileInView={{ rotate: -1 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3, type: "spring" }}
                    className='w-mainCircle'>
                    <div className='w-secCircle'>
                        <img src={upwork} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={fiverr} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={amazon} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={shopify} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={facebook} alt="" />
                    </div>
                </motion.div>

                {/* Backgrounds */}
                <div className='w-backCircle blueCircle'></div>
                <div className='w-backCircle yellowCircle'></div>
            </div>

        </div>
    )
}

export default Work