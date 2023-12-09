import { useState } from 'react'

import "./App.css";

function App() {
  const [eventos, setTodos] = useState([
    {
      id: 1,
      nome: "Evento 1",
      category: "Entretenimento",
      local: "Centro de eventos",
      descricao: "Teste 1",
      data: "01/01/2024"
    },
    {
      id: 2,
      nome: "Evento 2",
      category: "Aula",
      local: "Centro de eventos",
      descricao: "Teste 2",
      data: "01/02/2024"
    }
  ]);

  return (
    <div className='app'>
      <h1>Eventos</h1>
      <div className='eventos-list'>
        {eventos.map((evento) => (
          <div className="evento">
            <div className="content">
              <p className='evento-nome'>{evento.nome}</p>
              <p className="evento-category">({evento.category})</p>
              {/* <p className="evento-local">{evento.local}</p>
              <p className="evento-descricao">{evento.descricao}</p>
              <p className="evento-data">{evento.data}</p> */}
            </div>
            <div>
              <button>Exibir</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default App
