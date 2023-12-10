import React, { useState, useEffect } from 'react';
import { fetchFilteredEvents } from './../../service/ApiService'; 

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

  return (
    <div>
      <select onChange={handleFilterTypeChange}>
        <option value="event">Nome do Evento</option>
        <option value="local">Local</option>
        {/* <option value="date">Data</option> */}
        <option value="category">Categoria</option>
      </select>
      <input type="text" placeholder={`Filter by ${filterType}`} onChange={handleFilterChange} />

      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.name}</h2>
          <p>Data do evento: {new Date(event.date).toLocaleDateString('pt-BR')}</p>
          <p>Local: {event.location ? event.location.name : 'Local não disponível'}</p>
          <p>Categoria: {event.category ? event.category.name : 'Categoria não disponível'}</p>
        </div>
      ))}
    </div>
  );
};

export default EventPage;
