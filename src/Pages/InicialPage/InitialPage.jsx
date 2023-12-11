import React, { useEffect, useState } from 'react';
import InicialPageBar from '../../Components/InicialPageComponents/Bar/Bar.jsx'
import InicialPageRowOne from '../../Components/InicialPageComponents/Row1/Row.jsx'
import InicialPageRowTwo from '../../Components/InicialPageComponents/Row2/Row.jsx'
import "./Styles.css"

function InitialPage() {

  return (
    <> 
    <InicialPageBar />
     <div className='tela'>

     <div className='titulo' >
      <h1>Bem Vindo a Plataforma de <span>Eventos</span> Mais <span>Badalada</span> do Brasil !!</h1>
      </div>

      <InicialPageRowOne />
      <InicialPageRowTwo />
      </div> 
    
      
     </>
      
    
  )
}

export default InitialPage