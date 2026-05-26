import KaraokeCard from './KaraokeCard';

export default function Karaoke() {
  return (
    <section className="w-full min-h-screen bg-[#fdf6f0] text-[#6b1d2f] py-16 px-4 md:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* EN-TÊTE PRINCIPAL */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wide leading-tight mb-4">
            🎤 Soirées Karaoké <br className="md:hidden" />
            <span className="text-[#b1344d]">aux Délices de Saleilles !</span> 🎶
          </h1>
          <div className="w-24 h-1 bg-[#6b1d2f] mx-auto rounded-full mb-6" />
          
          <p className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Préparez-vous à vivre des soirées inoubliables ! Que vous soyez chanteur amateur ou star en devenir, c’est l’occasion parfaite de monter sur scène, micro en main, et de partager un moment convivial en famille ou entre amis.
          </p>
        </div>

        {/* SECTION AU PROGRAMME */}
        <div className="bg-white rounded-3xl border border-[#e6ccb2] p-6 md:p-8 shadow-sm mb-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center border-b border-[#e6ccb2] pb-3">
            Au programme :
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-zinc-700 font-semibold text-sm md:text-base">
            <li className="flex items-center gap-3 bg-[#fdf6f0]/60 p-3 rounded-xl border border-[#e6ccb2]/40">
              <span>✨</span> Ambiance festive & chaleureuse
            </li>
            <li className="flex items-center gap-3 bg-[#fdf6f0]/60 p-3 rounded-xl border border-[#e6ccb2]/40">
              <span>🎧</span> Un DJ passionné pour mettre le feu
            </li>
            <li className="flex items-center gap-3 bg-[#fdf6f0]/60 p-3 rounded-xl border border-[#e6ccb2]/40">
              <span>🎤</span> Large choix de chansons
            </li>
            <li className="flex items-center gap-3 bg-[#fdf6f0]/60 p-3 rounded-xl border border-[#e6ccb2]/40">
              <span>🍽️</span> Un bon repas dans une atmosphère détendue
            </li>
          </ul>
        </div>

        {/* LISTE DES PROCHAINES DATES (DÉCOMMENTÉE) */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-black text-center uppercase tracking-wide">
            📅 Les prochaines dates & menus
          </h2>
          <div className="w-16 h-1 bg-[#b1344d] mx-auto rounded-full mb-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center max-w-3xl mx-auto">
            <KaraokeCard />
          </div>
        </div>
        
      </div>
    </section>
  );
}
