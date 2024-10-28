import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";

const EventModal = ({ event, isOpen, onClose }) => {
  if (!event) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{event.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="relative group rounded-lg overflow-hidden">
            <img 
              src={event.image} 
              alt={event.name}
              className="w-full h-80 object-cover rounded-lg transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg">
              <Calendar className="w-5 h-5 mr-2 text-blue-500" />
              {new Date(event.date).toLocaleDateString()}
            </div>
            <div className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg">
              <Clock className="w-5 h-5 mr-2 text-blue-500" />
              {event.time}
            </div>
            <div className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg">
              <MapPin className="w-5 h-5 mr-2 text-blue-500" />
              {event.location}
            </div>
            <div className="flex items-center text-gray-600 bg-gray-50 p-3 rounded-lg">
              <Users className="w-5 h-5 mr-2 text-blue-500" />
              {event.attendees.toLocaleString()} attending
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {event.description}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventModal;

