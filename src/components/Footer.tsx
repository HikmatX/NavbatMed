import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">NAVBAT<span className="text-blue-500">MED</span></h3>
            <p className="text-gray-400">Xizmat tezligi – bizning ustunligimiz</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Tezkor Havolalar</h4>
            <ul className="space-y-2">
            <li><a href="/" className="text-gray-400 hover:text-white">Bosh sahifa</a></li>
              <li><a href="/find-doctors" className="text-gray-400 hover:text-white">Shifokorlarni topish</a></li>
              <li><a href="/clinics" className="text-gray-400 hover:text-white">Klinikalar</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">Biz haqimizda</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Aloqa</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span className="text-gray-400">+998 99 123 45 67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span className="text-gray-400">info@NAVBAT<span className="text-blue-500">MED</span>.uz</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span className="text-gray-400">Khorezm, Uzbekistan</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">To'lov usullari</h4>
            <div className="flex space-x-4">
              <span className="text-gray-400">Payme</span>
              <span className="text-gray-400">Click</span>
              <span className="text-gray-400">Alif</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NAVBAT<span className="text-blue-500">MED</span>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;