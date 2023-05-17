import './footer.css'
import Wave from '../../img/wave.png'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Face from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

function Footer() {
    return (
        <div className='footer'>
            <img src={Wave} alt="" />
            <span>ali.talaee.engeneer@gmail.com</span>
            
            <div className='f-content'>
                <Insta size='2.5rem' color='white' />
                <Face size='2.5rem' color='white' />
                <Github size='2.5rem' color='white' />
            </div>
        </div>
    )
}

export default Footer