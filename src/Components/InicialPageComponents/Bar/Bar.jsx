
import './bar.css'
import Logo from '../../../assets/logo.svg'

function InicialPageBar() {
 

  return (
    <>
      <div className='main-containerbar'>
        
        <div className='boxbar'>
        <img src={Logo} className="logobar" alt="logo" />
          <div className='textbar'>E-</div>
          <div className='text2bar'>Vents</div>
        </div>
        
        <div className='groupbar'>
        <span className='text3bar'>Explorar Eventos</span>
        <span className='text4bar'>Crie seu Evento</span>
        </div>
    </div>
      
    </>
  )
}

export default InicialPageBar