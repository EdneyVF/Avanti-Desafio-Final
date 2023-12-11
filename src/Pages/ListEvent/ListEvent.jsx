import React, { useState, useEffect } from 'react';
import { fetchFilteredEvents } from './../../service/ApiService';
import Header from '../../Components/Header/Header';
import './listEvent.css';
import Modal from '../../Components/Modal/modal'

const EventPage = () => {
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

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Header/>
      <div className='search-page'>
      <div className='event-filter'>
        <h3>Digite {filterType === "event" ? "o nome do evento" : filterType === "category" ? "a categoria do evento" : filterType === "local" ? "o local do evento" : filterType === "data" ? "a data do evento" : ""} que deseja buscar</h3>
        <select onChange={handleFilterTypeChange}>
          <option value="event">Nome do Evento</option>
          <option value="local">Local</option>
          {/* <option value="date">Data</option> */}
          <option value="category">Categoria</option>
        </select>
        <div className='search-div'>
          <input type="text" placeholder={`Pesquise por ${filterType === "event" ? "Nome" : filterType === "category" ? "Categoria" : filterType === "local" ? "Local" : filterType === "Data" ? "a data do evento" : ""}`} onChange={handleFilterChange} />
          <div className='div-search-icon'>
          <a href="#"><img className='search-icon' src="src\Pages\ListEvent\imgs\search-icon.svg" alt="" /></a>
          </div>
        </div>
      </div>

      <div className='event-list'>
        {events.map((event) => (
          <div className='event' key={event.id} onClick={() => setOpenModal(true)}>
            <img className='img-event' src="src\Pages\ListEvent\imgs\evento.png" alt="imagem-evento" />
            <div className='event-details'>
              <h2>{event.name}</h2>
              <p>Data do evento: {new Date(event.date).toLocaleDateString('pt-BR')}</p>
              <p>Local: {event.location ? event.location.name : 'Local não disponível'}</p>
              <p>Categoria: {event.category ? event.category.name : 'Categoria não disponível'}</p>
            </div>
            <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
            </Modal>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default EventPage;
