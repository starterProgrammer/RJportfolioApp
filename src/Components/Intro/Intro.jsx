import './intro.css'
// Import Images 
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import instagram from '../../img/instagram.png'
import vector1 from '../../img/vector1.png'
import vector2 from '../../img/vector2.png'
import boy from '../../img/boy.png'
import glassesimoji from '../../img/glassesimoji.png'
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import Floating from '../Floating/Floating'
function Intro() {
    return (
        <div className='intro'>
            <div className='i-left'>
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Andrew Thomas</span>
                    <span>
                        Frontend Developer with higher level of experience in web designing and
                        development,
                        productiong the Quality work </span>
                </div>

                <button className='button i-button'>Hire Me</button>

                <div className="i-icon">
                    <img src={github} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div>

            {/* Right Section */}
            <div className='i-right'>
                <img src={vector1} alt="" />
                <img src={vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glassesimoji} alt="" />
                <div className='float-1'>
                    <Floating image={crown} txt1="web" txt2="developer" />
                </div>

                <div className='float-2'>
                    <Floating image={thumbup} txt1="best design" txt2="award" />
                </div>

                {/* Blur dive */}
                <div className='blur blur-left'></div>
                <div className='blur blur-center'></div>
            </div>
        </div>
    )
}

export default Intro