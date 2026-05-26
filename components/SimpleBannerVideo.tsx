'use client';

interface SimpleBannerVideoProps {
  url: string;
}

export default function SimpleBannerVideo({ url }: SimpleBannerVideoProps) {
  return (
    <div className="relative w-full h-[30vh] md:h-[45vh] overflow-hidden bg-zinc-900 rounded-2xl border border-[#e6ccb2]/60 shadow-md group">
      
      {/* VOILE SOMBRE DISCRET (Améliore le contraste du bouton) */}
      <div className="absolute inset-0 bg-black/20 z-10 transition-colors group-hover:bg-black/30" />

      {/* LA VIDÉO EN PLEIN ÉCRAN FLUIDE */}
      <video
        className="w-full h-full object-cover object-center absolute inset-0"
        src={url}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* BOUTON DE RÉSERVATION INTERACTIF (DÉCOMMENTÉ & ENRICHI) */}
      <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
        <a 
          href="tel:0650729588" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f2a4a] text-[#fdf6f0] hover:bg-[#6b1d2f] font-black uppercase tracking-wider text-sm md:text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 border border-white/10"
        >
          <span className="animate-bounce">📞</span> 
          Réserver au 06 50 72 95 88
        </a>
      </div>
      
    </div>
  );
}