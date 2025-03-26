import React, { useState } from 'react';
import { Search, Star, MapPin, Clock, Phone } from 'lucide-react';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  location: string;
  rating: number;
  experience: string;
  image: string;
  availability: string;
  phone: string;
}

function FindDoctors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const specialties = [
    'Barcha mutaxassislik',
    'Kardiolog',
    'Nevrolog',
    'Pediatr',
    'Dermatolog',
    'Ortoped',
  ];

  const doctors: Doctor[] = [
    {
      id: 1,
      name: 'Dr. falonchi falonchiyeva',
      specialty: 'Kardiolog',
      location: 'Falon klinika, Urganch',
      rating: 4.8,
      experience: '15 yillik tajriba',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80',
      availability: '08:00/17:00 Du-Sha',
      phone: '+998 99 123 45 67'
    },
    {
      id: 2,
      name: 'Dr. Yoshullini bolasi',
      specialty: 'Nevrolog',
      location: 'Ozini klinikasi bo, Urganch',
      rating: 4.9,
      experience: '12 yillik tajriba',
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80',
      availability: '08:00/17:00 Du-Sha',
      phone: '+998 99 234 56 78'
    },
    {
      id: 3,
      name: 'Dr. Natasha',
      specialty: 'Pediatr',
      location: 'Bolalar shifoxonasi, Urganch',
      rating: 4.7,
      experience: '9 yillik tajriba',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80',
      availability: '08:00/17:00 Du-Sha',
      phone: '+998 99 345 67 89'
    }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || 
                            doctor.specialty === specialties[parseInt(selectedSpecialty)];
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shifokor toping</h1>
      
      <div className="mb-8">
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Ism, mutaxassislik yoki joylashuv bo'yicha qidiring"
            className="flex-1 p-3 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-3 border rounded-md"
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
          >
            {specialties.map((specialty, index) => (
              <option key={index} value={index === 0 ? 'all' : index.toString()}>
                {specialty}
              </option>
            ))}
          </select>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 flex items-center gap-2">
            <Search className="h-5 w-5" />
            Qidirish
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map(doctor => (
          <div key={doctor.id} className="border rounded-lg overflow-hidden shadow-md">
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
              <p className="text-gray-600 mb-2">{doctor.specialty}</p>
              
              <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-600 text-sm">{doctor.location}</span>
              </div>
              
              <div className="flex items-center mb-2">
                <Star className="h-4 w-4 text-yellow-400 mr-2" />
                <span className="text-gray-600 text-sm">{doctor.rating} • {doctor.experience}</span>
              </div>
              
              <div className="flex items-center mb-4">
                <Clock className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-600 text-sm">{doctor.availability}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-gray-600 text-sm">{doctor.phone}</span>
                </div>
                <button 
                  onClick={() => window.location.href = '/registration'}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm"
                >
                  Kabulga yozilish
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindDoctors;
