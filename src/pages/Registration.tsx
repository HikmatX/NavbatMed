import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Phone, Home } from 'lucide-react';

function Registration() {
  const [formData, setFormData] = useState({
    fullName: '',
    birthDate: '',
    district: '',
    department: '',
    appointmentDate: '',
    appointmentTime: '',
    phone: '',
    address: ''
  });

  const districts = [
    'Urganch shahar',
    'Xiva shahar',
    'Bog‘ot tuman',
    'Gurlan tuman',
    'Xazarasp tuman',
    'Xiva tuman',
    'Qo‘shk‘opir tuman',
    'Shovot tuman',
    'Urganch shahar',
    'Yangiariq tuman',
    'Yangibozor tuman'
  ];

  const departments = [
    'Kardiologiya',
    'Nevralogiya',
    'Pediatriya',
    'Ortopediya',
    'Dermatologiya',
    'Ophthalmology',
    'KBB',
    'Stomatologiya'
  ];

  const generateTimeSlots = () => {
    const slots = [];
    let hour = 8;
    let minute = 0;

    while (hour < 18) {
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      slots.push(timeString);
      minute += 15;
      if (minute >= 60) {
        minute = 0;
        hour += 1;
      }
    }

    return slots;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Uchrashuv muvaffaqiyatli qayd etildi!');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Uchrashuvni bron qiling</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                To‘liq F.I.Sh.
              </span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full p-3 border rounded-md"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Tug‘ulgan kuningiz
              </span>
            </label>
            <input
              type="date"
              name="birthDate"
              required
              className="w-full p-3 border rounded-md"
              value={formData.birthDate}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Tuman/Shahar
              </span>
            </label>
            <select
              name="district"
              required
              className="w-full p-3 border rounded-md"
              value={formData.district}
              onChange={handleInputChange}
            >
              <option value="">Tuman/Shahar tanlang</option>
              {districts.map(district => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bo‘lim
            </label>
            <select
              name="department"
              required
              className="w-full p-3 border rounded-md"
              value={formData.department}
              onChange={handleInputChange}
            >
              <option value="">Bo‘limingizni tanlang</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Uchrashuv sanasi
              </span>
            </label>
            <input
              type="date"
              name="appointmentDate"
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full p-3 border rounded-md"
              value={formData.appointmentDate}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Uchrashuv vaqti
              </span>
            </label>
            <select
              name="appointmentTime"
              required
              className="w-full p-3 border rounded-md"
              value={formData.appointmentTime}
              onChange={handleInputChange}
            >
              <option value="">Vaqtni tanlang</option>
              {generateTimeSlots().map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Telefon raqam
              </span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+998 __ ___ __ __"
              className="w-full p-3 border rounded-md"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                To‘liq Manzil
              </span>
            </label>
            <input
              placeholder="Viloyat/Tuman/Mahalla/Ko‘cha/Uy"
              type="text"
              name="address"
              required
              className="w-full p-3 border rounded-md"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors" onclick="openFolder()">
            Ro‘yhatdan o‘tish
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registration;