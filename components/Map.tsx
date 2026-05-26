'use client';

import React from 'react';

export default function GoogleMap() {
  const address = {
    name: "Les Délices de Saleilles",
    email: "bernard.yanwei@gmail.com",
    phone: "06 50 72 95 88",
    fullAddress: "26 avenue de Perpignan, 66280 Saleilles",
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-[#e6ccb2] shadow-sm overflow-hidden flex flex-col md:flex-row">
      
      {/* BLOC DES COORDONNÉES */}
      <div className="p-6 md:p-8 flex flex-col justify-center bg-[#fdf6f0]/30 md:w-2/5 border-b md:border-b-0 md:border-r border-[#e6ccb2]">
        <h3 className="text-2xl font-black text-[#6b1d2f] mb-4">
          {address.name}
        </h3>
        
        <div className="space-y-3 text-sm md:text-base text-zinc-700">
          <p className="leading-relaxed">
            <strong className="text-[#0f2a4a] block md:inline">Adresse :</strong> {address.fullAddress}
          </p>
          <p>
            <strong className="text-[#0f2a4a]">Téléphone :</strong>{' '}
            <a href={`tel:${address.phone.replace(/\s/g, '')}`} className="hover:text-[#6b1d2f] transition-colors">
              {address.phone}
            </a>
          </p>
          <p className="break-all">
            <strong className="text-[#0f2a4a]">Email :</strong>{' '}
            <a href={`mailto:${address.email}`} className="hover:text-[#6b1d2f] transition-colors">
              {address.email}
            </a>
          </p>
        </div>
      </div>

      {/* BLOC IFRAME GOOGLE MAPS */}
      <div className="w-full md:w-3/5 h-[300px] md:h-[400px] relative bg-zinc-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.284384047838!2d2.9509453410427526!3d42.65532861651548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b07b82a74f8c51%3A0xb02316d3f15b45d2!2sLes%20D%C3%A9lices%20de%20Saleilles!5e0!3m2!1sfr!2sfr!4v1746805568651!5m2!1sfr!2sfr" 
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0 absolute inset-0"
        ></iframe>
      </div>
     
    </div>
  );
}