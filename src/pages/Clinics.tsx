import React from 'react';
import { MapPin, Phone, Clock, Users } from 'lucide-react';

interface Clinic {
  id: number;
  name: string;
  image: string;
  address: string;
  phone: string;
  hours: string;
  doctorCount: number;
  specialties: string[];
}



function Clinics() {
  const clinics: Clinic[] = [
    {
      id: 1,
      name: 'Markaziy tibbiyot klinikasi',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80',
      address: 'Urganch, Tibbiyot punkti ko‘chasi, 123',
      phone: '+998 99 123 45 67',
      hours: 'Du-Sha: 8:00 - 18:00',
      doctorCount: 45,
      specialties: ['Kardiologiya', 'Nevrologiya', 'Pediatriya', 'Ortopediya']
    },
    {
      id: 2,
      name: 'Xorazm oilaviy shifoxonasi',
      image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80',
      address: 'Urganch, Sog‘liqni saqlash shoh ko‘chasi, 456',
      phone: '+998 99 234 56 78',
      hours: 'Du-Sha: 24/7',
      doctorCount: 62,
      specialties: ['Oila tibbiyoti', 'Shoshilinch tibbiy yordam', 'Jarrohlik', 'Ichki kasalliklar']
    },
    {
      id: 3,
      name: 'Zamonaviy tibbiyot markazi',
      image: 'https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?auto=format&fit=crop&q=80',
      address: 'Urganch, Al xorazmiy ko‘chasi, 789-uy',
      phone: '+998 99 345 67 89',
      hours: 'Du-Ju: 9:00 - 17:00',
      doctorCount: 38,
      specialties: ['Dermatologiya', 'Oftalmologiya', 'KBB', 'Stomatologiya']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Klinikalar</h1>
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clinics.map(clinic => (
          <div key={clinic.id} className="border rounded-lg overflow-hidden shadow-md">
            <img 
              src={clinic.image} 
              alt={clinic.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{clinic.name}</h3>
              
              <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-600 text-sm">{clinic.address}</span>
              </div>
              
              <div className="flex items-center mb-2">
                <Phone className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-600 text-sm">{clinic.phone}</span>
              </div>
              
              <div className="flex items-center mb-2">
                <Clock className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-600 text-sm">{clinic.hours}</span>
              </div>
              
              <div className="flex items-center mb-4">
                <Users className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-600 text-sm">{clinic.doctorCount} Shifokor</span>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">Mutaxassisliklar:</h4>
                <div className="flex flex-wrap gap-2">
                  {clinic.specialties.map((specialty, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => window.location.href = '/registration'}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
              >
                Ro‘yhatdan o‘tish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clinics;