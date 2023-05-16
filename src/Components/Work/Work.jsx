import './work.css'
import fiverr from '../../img/fiverr.png'
import facebook from '../../img/facebook.png'
import amazon from '../../img/amazon.png'
import shopify from '../../img/shopify.png'
import upwork from '../../img/upwork.png'

function Work() {
    return (
        <div className='work'>
            <div className='w-left'>
                <span>works for all these</span>
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

                <div className='w-mainCircle'>
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
                </div>

                {/* Backgrounds */}
                <div className='w-backCircle blueCircle'></div>
                <div className='w-backCircle yellowCircle'></div>
            </div>

        </div>
    )
}

export default Work