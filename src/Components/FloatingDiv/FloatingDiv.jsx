import './floatingdiv.css'


function FloatingDiv({image , title , txt}) {
  return (
    <div className='FloatingDiv'>
        <img src={image} alt="" />
        <span>{title}</span>
        <span>{txt}</span>
        <button className='f-button'>learn more</button>
    </div>
  )
}

export default FloatingDiv