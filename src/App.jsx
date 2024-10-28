import React, { useState } from 'react';
import EventCard from './components/EventCard';
import EventModal from './components/EventModal';
import SearchBar from './components/SearchBar';
import { mockEvents } from './data/mockEvents';

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = mockEvents.filter(event => 
    event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            EventSpot Lite
          </h1>
          <p className="mt-2 text-gray-600">Discover amazing events happening around you</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <SearchBar 
          value={searchQuery}
          onChange={setSearchQuery}
        />

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <EventCard 
              key={event.id} 
              event={event} 
              onClick={setSelectedEvent}
              index={index}
            />
          ))}
        </div>

        <EventModal 
          event={selectedEvent}
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      </main>
    </div>
  );
};

export default App;