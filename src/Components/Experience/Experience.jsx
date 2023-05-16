import './experience.css'
import Achivement from '../Achivement/Achivement'

function Experience() {
    return (
        <div className='experience'>

            <Achivement
                year={'8+'}
                title={'year'}
                txt={"Eperience"}
            />

            <Achivement
                year={'20+'}
                title={'Completed'}
                txt={"Projects"}
            />

            <Achivement
                year={'5+'}
                title={'Companies'}
                txt={"Work"}
            />

        </div>
    )
}

export default Experience