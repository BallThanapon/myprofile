"use client"

import React, { createContext, useState, useContext } from 'react';
import { textContent } from './textcontent';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en'); // ค่าเริ่มต้นเป็นภาษาไทย

  const toggleLang = () => {
    setLang((prev) => (prev === 'th' ? 'en' : 'th'));
  };

  // ดึงคำแปลตามภาษาปัจจุบัน
  const t = textContent[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook สำหรับเรียกใช้งานง่ายๆ
export const useLang = () => useContext(LanguageContext);