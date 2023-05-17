import './portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import musicapp from '../../img/musicapp.png'
// Import Swiper styles
import 'swiper/css';


function Portfolio() {
    return (
        <div className='portfolio' id='portfolio'>
            {/* Heading */}
            <span>Recent Projects</span>
            <span>Portfolio</span>


            {/* Slider*/}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={musicapp} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={HOC} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio