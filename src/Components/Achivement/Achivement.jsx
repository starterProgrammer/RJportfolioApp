import './achivement.css'

function Achivement({ year, title, txt }) {
    return (
        <div className='achivement'>
            <div className='circle'>{year}</div>
            <span>{title}</span>
            <span>{txt}</span>
        </div>
    )
}

export default Achivement