import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Building2, Info, Calendar } from 'lucide-react';
import logo from "../images/logo.png.png";
import { Home } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img className="w-[100px] h-[100px]" src={logo} alt="logo"/>
              <span className="text-xl font-bold text-gray-900">NAVBAT<span className="text-blue-500">MED</span></span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
          <Home className="h-5 w-5" />
              <span>Bosh sahifa</span>
            </Link>
            <Link to="/find-doctors" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
              <Stethoscope className="h-5 w-5" />
              <span>Shifokorlarni topish</span>
            </Link>
            
            <Link to="/clinics" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
              <Building2 className="h-5 w-5" />
              <span>Klinikalar</span>
            </Link>
            
            <Link to="/about" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
              <Info className="h-5 w-5" />
              <span>Biz haqimizda</span>
            </Link>
            
            <Link to="/clinics" className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              <Calendar className="h-5 w-5" />
              <span>Ro‘yxatdan o‘tish</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;