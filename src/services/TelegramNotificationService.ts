// import axios from 'axios';

// interface Doctor {
//   id: number;
//   name: string;
//   specialty: string;
//   location: string;
//   rating: number;
//   experience: string;
//   phone: string;
//   availability: string;
// }

// interface TelegramChannelConfig {
//   [key: string]: string; // Specialty -> Telegram Bot Token va Chat ID
// }

// class TelegramNotificationService {
//   private channelConfigs: TelegramChannelConfig = {
//     'Kardiolog': process.env.KARDIOLOG_TELEGRAM_BOT_TOKEN || '',
//     'Nevrolog': process.env.NEVROLOG_TELEGRAM_BOT_TOKEN || '',
//     'Pediatr': process.env.PEDIATR_TELEGRAM_BOT_TOKEN || '',
//     // Boshqa mutaxassisliklar uchun bo'sh qatorlar qo'shing
//   };

//   private channelChatIds: TelegramChannelConfig = {
//     'Kardiolog': process.env.KARDIOLOG_CHAT_ID || '',
//     'Nevrolog': process.env.NEVROLOG_CHAT_ID || '',
//     'Pediatr': process.env.PEDIATR_CHAT_ID || '',
//     // Boshqa mutaxassisliklar uchun bo'sh qatorlar qo'shing
//   };

//   async sendDoctorAppointmentNotification(doctor: Doctor, patientData: any) {
//     const { specialty } = doctor;
//     const botToken = this.channelConfigs[specialty];
//     const chatId = this.channelChatIds[specialty];

//     if (!botToken || !chatId) {
//       console.error(`Telegram kanal konfiguratsiyasi topilmadi: ${specialty}`);
//       return false;
//     }

//     const message = this.formatMessage(doctor, patientData);

//     try {
//       await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
//         chat_id: chatId,
//         text: message,
//         parse_mode: 'HTML'
//       });
//       return true;
//     } catch (error) {
//       console.error('Telegram xabarnomani yuborishda xatolik:', error);
//       return false;
//     }
//   }

//   private formatMessage(doctor: Doctor, patientData: any): string {
//     return `
// 🩺 <b>Yangi Uchrashuv Talabi</b>

// 👨‍⚕️ Shifokor: ${doctor.name}
// 📋 Mutaxassislik: ${doctor.specialty}
// 📍 Joylashuv: ${doctor.location}

// 👤 Bemor Ma'lumotlari:
// - Ism: ${patientData.fullName}
// - Telefon: ${patientData.phone}
// - Tug'ilgan sana: ${patientData.birthDate}
// - Manzil: ${patientData.address}

// 📅 Uchrashuv Vaqti:
// - Sana: ${patientData.appointmentDate}
// - Vaqt: ${patientData.appointmentTime}

// Iltimos, uchrashuvni tasdiqlang yoki rad etishingizni so'raymiz.
//     `;
//   }
// }

// export default TelegramNotificationService;