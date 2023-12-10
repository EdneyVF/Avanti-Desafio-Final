
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
        <Link to='/events'><span className='text3bar'>Explorar Eventos</span></Link>
        <Link to='/auth-admin'><span className='text4bar'>Crie seu Evento</span></Link>
        </div>
    </div>
      
    </>
  )
}

export default InicialPageBar