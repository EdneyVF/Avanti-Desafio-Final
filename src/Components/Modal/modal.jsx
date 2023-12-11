import React, { useState, useEffect } from 'react'
import { fetchFilteredEvents } from './../../service/ApiService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faClock, faMusic, faThumbTack  } from '@fortawesome/free-solid-svg-icons'

const BACKGROUND_STYLE = {
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    backgroundColor: 'rgb(0, 0, 0, 0.3)',
    zIndex: '1000'
}

const MODAL_STYLE = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '50vw',
    height: '50vh',
    backgroundColor: '#9abc8a',
    border: '5px solid #2d1b33',
    padding: '0px',
    borderRadius: '0.5rem',
    color: '#000',
    zIndex: '1000',
}

const BUTTON_STYLE = {
    position: 'absolute',
    top: '-4%',
    left: '98%',
    backgroundColor: '#f36a71',
    width: '40px',
    height: '40px',
    padding: '0',
    borderRadius: '10rem',
    zIndex: '1002'
}

const PARAGRAPH_STYLE = {
    textAlign: 'left',
    marginLeft: '30px',
    color: '#2d1b33',
    fontSize: '14pt',
}
  
const MODAL_TITLE = {
    position: 'fixed',
    top: '5%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    color: '#2d1b33',
    fontSize: '24pt',
}
  
const PARAGRAPH_ICONS = {
    marginRight: '10px',
    color: '#374957',
}

const ICON_STYLE = {
    color: '#000',
    fontSize: '16pt',
}

export default function Modal({isOpen, children, setModalOpen}) {
    
    const [events, setEvents] = useState([]);
    const [filter, setFilter] = useState({});
    const [filterType, setFilterType] = useState('event');

    useEffect(() => {
        const fetchFiltered = async () => {
        const filteredEvents = await fetchFilteredEvents(filter);
        setEvents(filteredEvents);
        };

        fetchFiltered();
    }, [filter]);

    const handleFilterChange = (event) => {
        setFilter({ ...filter, [filterType]: event.target.value });
    };

    const handleFilterTypeChange = (event) => {
        setFilterType(event.target.value);
    };

    if (isOpen) {
        return (
            <div>
                {events.map((event) => (   
                <div style={BACKGROUND_STYLE}>
                        <div style={MODAL_STYLE}>
                            <div>
                                {children} 
                            </div>
                            <h2 style={MODAL_TITLE}>{event.name}</h2>
                            <div style={PARAGRAPH_STYLE}> 
                                <p><FontAwesomeIcon icon={faThumbTack} style={PARAGRAPH_ICONS}/><strong>Local do Evento: {event.location ? event.location.name : 'Local não disponível'}</strong></p>
                                <p><FontAwesomeIcon icon={faClock} style={PARAGRAPH_ICONS}/><strong>Data: </strong>{new Date(event.date).toLocaleDateString('pt-BR')}</p>
                                <p><FontAwesomeIcon icon={faMusic} style={PARAGRAPH_ICONS}/><strong>Categoria: {event.category ? event.category.name : 'Categoria não disponível'}</strong></p>
                            </div> 
                            <button onClick={setModalOpen} style={BUTTON_STYLE}><FontAwesomeIcon icon={faXmark} style={ICON_STYLE}/></button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return null
}