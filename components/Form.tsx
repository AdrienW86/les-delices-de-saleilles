"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSended, setIsSended] = useState(false);
 
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    if (!isLoading) {
      setIsLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setIsLoading(false);

      if (!response.ok) {
        console.log("error");
        alert("Le formulaire n'a pas pu être envoyé");
      } else {
        console.log("ok");
        reset();
        setIsSended(true);
        alert("Le formulaire a été envoyé avec succès");
      }
    }
  };

  return (
    <section className="w-full bg-white rounded-3xl border border-[#e6ccb2] p-6 md:p-10 shadow-sm max-w-2xl mx-auto transition-all duration-300">
      
      {/* ÉCRAN DE CONFIRMATION SUCCÈS */}
      {isSended && (
        <div className="text-center py-8 animate-fade-in">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            ✓
          </div>
          <p className="text-lg font-bold text-[#6b1d2f] leading-relaxed">
            Votre message a bien été envoyé. <br />
            <span className="text-sm font-medium text-zinc-500">
              Nous vous répondrons dans les plus brefs délais.
            </span>
          </p>
        </div>
      )}

      {/* FORMULAIRE ACTIF */}
      {!isSended && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">           
          <h3 className="text-xl md:text-2xl font-bold text-[#6b1d2f] text-center mb-6 leading-snug">
            Une question ? <br className="sm:hidden" /> Nous vous répondrons dans les meilleurs délais
          </h3>    
          
          <div className="space-y-4">
            
            {/* CHAMP NOM */}
            <div className="flex flex-col">
              <input 
                className={`w-full px-4 py-3 rounded-xl border bg-[#fdf6f0]/20 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6b1d2f]/20 transition-all text-sm md:text-base ${
                  errors.name ? 'border-red-400 focus:border-red-400' : 'border-[#e6ccb2] focus:border-[#6b1d2f]'
                }`}
                placeholder="Nom" 
                {...register('name', { required: true })} 
              />
              {errors.name && <span className="text-xs font-semibold text-red-500 mt-1 pl-1">Ce champ est requis.</span>}          
            </div>

            {/* CHAMP EMAIL */}
            <div className="flex flex-col">
              <input 
                className={`w-full px-4 py-3 rounded-xl border bg-[#fdf6f0]/20 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6b1d2f]/20 transition-all text-sm md:text-base ${
                  errors.email ? 'border-red-400 focus:border-red-400' : 'border-[#e6ccb2] focus:border-[#6b1d2f]'
                }`}
                placeholder="Email" 
                type="email"
                {...register('email', { required: true })} 
              />
              {errors.email && <span className="text-xs font-semibold text-red-500 mt-1 pl-1">Ce champ est requis.</span>}          
            </div>

            {/* CHAMP DEMANDE */}
            <div className="flex flex-col">
              <input 
                className={`w-full px-4 py-3 rounded-xl border bg-[#fdf6f0]/20 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6b1d2f]/20 transition-all text-sm md:text-base ${
                  errors.subject ? 'border-red-400 focus:border-red-400' : 'border-[#e6ccb2] focus:border-[#6b1d2f]'
                }`}
                placeholder="Demande (ex: Réservation, Événement...)" 
                {...register('subject', { required: true })} 
              />
              {errors.subject && <span className="text-xs font-semibold text-red-500 mt-1 pl-1">Ce champ est requis.</span>}           
            </div>

            {/* CHAMP MESSAGE */}
            <div className="flex flex-col">
              <textarea 
                className={`w-full px-4 py-3 rounded-xl border bg-[#fdf6f0]/20 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#6b1d2f]/20 h-32 resize-none transition-all text-sm md:text-base ${
                  errors.message ? 'border-red-400 focus:border-red-400' : 'border-[#e6ccb2] focus:border-[#6b1d2f]'
                }`}
                placeholder="Votre message..."  
                {...register('message', { required: true })} 
              />
              {errors.message && <span className="text-xs font-semibold text-red-500 mt-1 pl-1">Ce champ est requis.</span>}     
            </div>

          </div>

          {/* BOUTON DE SOUMISSION */}
          <div className="pt-2">
            <button 
              className={`w-full py-3.5 px-6 font-bold text-white rounded-xl transition-all duration-200 shadow-sm flex items-center justify-center gap-2 ${
                isLoading 
                  ? 'bg-zinc-400 cursor-not-allowed' 
                  : 'bg-[#6b1d2f] hover:bg-[#b1344d] active:scale-[0.99]'
              }`} 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Envoi en cours...
                </>
              ) : (
                "Envoyer le message"
              )}
            </button>
          </div>     
        </form>
      )}
    </section>
  );
}