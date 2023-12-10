
import './row1.css'
import img1 from '../../../assets/img2.svg'

function InicialPageRowOne() {
 

  return (
    <>
      <div className='main-container'>
      <img src={img1} className="imagem" alt="Vite logo" />
      <div className='section'>
        <div className='text-1'>Descubra Eventos</div>
        <div className='text-2'>
        Descubra eventos incríveis em uma jornada feita sob medida para você no aplicativos de criação de eventos. Você mergulha em recomendações personalizadas, descobrindo desde festivais empolgantes até workshops inovadores, graças a algoritmos inteligentes e filtros precisos
        </div>
      </div>
    </div>
      
    </>
  )
}

export default InicialPageRowOne