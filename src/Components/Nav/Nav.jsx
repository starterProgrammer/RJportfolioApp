import Link from 'react-scroll/modules/components/Link'
import Toggle from '../Toggle/Toggle'
import './nav.css'


function Nav() {
    return (
        <div className='n-wrapper' id="Navbar">
            <div className="n-left">
                <div className="n-name">Andrew</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <Link activeClass="active" to="Navbar" spy={true} smooth={true} ><li>Home</li></Link>
                        <Link to="services" spy={true} smooth={true} > <li>Services</li></Link>
                        <Link to="works" spy={true} smooth={true} > <li>Experience</li></Link>
                        <Link to="portfolio" spy={true} smooth={true} ><li>Portfolio</li></Link>
                        <Link to="testimonial" spy={true} smooth={true} ><li>Testimonials</li></Link>
                    </ul>
                </div>
                <Link to="contact" spy={true} smooth={true}>
                    <button className="button n-button">Contact</button>
                </Link>
            </div>
        </div>
    )
}

export default Nav