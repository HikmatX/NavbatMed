import React from 'react';
import { Shield, Clock, Users, Award, Phone, Telegarm } from 'lucide-react';
import { FaTelegram } from "react-icons/fa";


function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">NAVBAT<span className="text-blue-500">MED</span> <span className="text-red-500">haqida</span></h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          NAVBAT<span className="text-blue-500">MED</span> O‘zbekistondagi yetakchi raqamli sog‘liqni saqlash platformasi bo‘lib, bemorlarni Xorazm viloyatidagi malakali tibbiyot xodimlari bilan bog‘laydi. Ishonchli platforma Tasdiqlangan shifokorlar va xavfsiz uchrashuvni bron qilish 24/7 xizmat Uchrashuvlarni istalgan vaqtda, istalgan joyda bron qiling
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="text-center p-6 border rounded-lg">
          <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Ishonchli platforma</h3>
          <p className="text-gray-600">Tasdiqlangan shifokorlar va xavfsiz uchrashuvni bron qilish</p>
        </div>

        <div className="text-center p-6 border rounded-lg">
          <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">24/7 Xizmat</h3>
          <p className="text-gray-600">Uchrashuvlarni istalgan vaqtda, istalgan joyda bron qiling</p>
        </div>

        <div className="text-center p-6 border rounded-lg">
          <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Katta tarmoq</h3>
          <p className="text-gray-600">Bir qancha mutaxassisliklar bo'yicha 500 dan ortiq shifokorlar</p>
        </div>

        <div className="text-center p-6 border rounded-lg">
          <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Sifatli parvarish</h3>
          <p className="text-gray-600">Sog'liqni saqlash xizmatining eng yuqori standartlari</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Bizning missiyamiz</h2>
          <p className="text-gray-600 mb-6">
            NavbatMed – bu shifokorlar va klinikalar uchun bemorlar bilan bog‘lanishni osonlashtiruvchi innovatsion platforma. Biz sizga xizmatlaringizni raqamli makonda targ‘ib qilish va bemorlarga qulay yechim taqdim etish imkoniyatini beramiz.
          </p>
          <p className="text-gray-600">
            Platformamiz orqali siz yangi bemorlarni jalb qilishingiz, ish samaradorligini oshirishingiz va tibbiy xizmatlarni yanada yuqori darajaga olib chiqishingiz mumkin.
          </p>

        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Nima uchun NAVBAT<span className="text-blue-500">MED</span>ni tanlaysiz?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="bg-blue-100 p-1 rounded mr-3">✓</span>
              <span>Raqamli navbat tizimi (E-System) – kutish vaqtini kamaytirish va ish samaradorligini oshirish</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 p-1 rounded mr-3">✓</span>
              <span>Faqat tasdiqlangan shifokorlar va klinikalar – bemorlar ishonchini oshirish</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 p-1 rounded mr-3">✓</span>
              <span>Qulay to‘lov tizimlari (Payme, Uzum Pay) – bemorlar uchun oson va tez to‘lov</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 p-1 rounded mr-3">✓</span>
              <span>SMS va email eslatmalar – qabul vaqtlarini eslatish va tashriflarni kamaytirmaslik</span>
            </li>
          </ul>

        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Biz bilan bog'lanish</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center justify-center ">
              <Phone className="h-6 w-6 text-blue-600 mr-3" />
              <a href="tel:+998940944002" className="text-blue-600 hover:underline text-black" >
                +998 94 094 40 02
              </a>
            </div>
            <div className="flex items-center justify-center">
              <FaTelegram className="h-6 w-6 text-blue-600 mr-3" />
              <span><a href="https://t.me/Hikmatdev">Telegram</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;