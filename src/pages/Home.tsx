import React from 'react';
import { Search, Calendar, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">NAVBAT<span className="text-blue-500">MED</span> Xizmat tezligi – bizning ustunligimiz!</h1>
            <p className="text-xl mb-8">Xorazm viloyatidagi eng yaxshi shifokorlar qabuliga yoziling. Tez, oson va xavfsiz.</p>
            <Link 
              to="/find-doctors" 
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700"
            >
             Hozir band qiling
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Platforma qanday ishlaydi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Doktor toping</h3>
              <p className="text-gray-600">Sizga mos shifokorni topish uchun mutaxassislik, ism yoki joylashuv bo'yicha qidiring</p>
            </div>
            <div className="text-center p-6">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Vatqni tayinlash</h3>
              <p className="text-gray-600">Qulay vaqt oralig'ini tanlang va uchrashuvni darhol bron qiling</p>
            </div>
            <div className="text-center p-6">
              <Bell className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Eslatmalar oling</h3>
              <p className="text-gray-600">Kelgusi uchrashuvlaringiz uchun SMS va elektron pochta xabarnomalarini oling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Shifokorlar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Klinikalar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100 Ming+</div>
              <div className="text-gray-600">Bemorlar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4.8 ⭐ </div>
              <div className="text-gray-600">Reyting</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;