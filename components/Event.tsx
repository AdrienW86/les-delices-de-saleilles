import Image from 'next/image';
import Link from 'next/link';

export default function Event() {
  return (
    <section className="w-full min-h-screen bg-[#fdf6f0] text-[#6b1d2f] py-16 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* EN-TÊTE DE LA PAGE */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wide mb-2">
            Nos Soirées à Thème
          </h1>
          <div className="w-24 h-1 bg-[#6b1d2f] mx-auto rounded-full mb-4" />
          <p className="text-zinc-600 max-w-md mx-auto text-sm md:text-base font-medium">
            Partagez des moments festifs, gourmands et inoubliables aux Délices de Saleilles.
          </p>
        </div>

        {/* GRILLE DES CARTES ÉVÉNEMENTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CARD 1 : KARAOKÉ */}
          <div className="bg-white rounded-3xl border border-[#e6ccb2] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
            <div className="relative w-full h-64 bg-zinc-100">
              <Image 
                id="karaoke"               
                src="/dj.avif"
                alt="Soirée DJ et Karaoké aux Délices de Saleilles"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
              <span className="absolute top-4 right-4 bg-amber-400 text-[#0f2a4a] text-xs font-black uppercase px-3 py-1 rounded-full shadow-sm">
                Tous les vendredis
              </span>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-3 text-[#6b1d2f]">🎤 Karaoké</h2>
                <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-6">
                  Venez libérer la star qui est en vous ! Ambiance conviviale, micro ouvert à tous, rires et bonne humeur garantis.
                  Que vous chantiez juste ou faux, l’essentiel c’est de s’amuser ! Rendez-vous chaque vendredi à partir de 20h.
                </p>
              </div>
              <Link 
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-[#6b1d2f] text-white hover:bg-[#b1344d] font-bold rounded-xl transition-colors shadow-sm text-center" 
                href="/karaoke"
              >
                Voir les prochaines dates
              </Link>
            </div>
          </div>

          {/* CARD 2 : SOIRÉES À THÈME */}
          <div className="bg-white rounded-3xl border border-[#e6ccb2] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
            <div className="relative w-full h-64 bg-zinc-100">
              <Image                  
                src="/paella.avif"
                alt="Plat de paëlla géante pour soirée à thème"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-3 text-[#6b1d2f]">🎉 Soirées à thème</h2>
                <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                  Voyagez le temps d'une soirée avec nos soirées à thèmes ! 
                  Cuisine du monde, décorations immersives, déguisements et surprises… 
                  Chaque événement est l’occasion de vivre une expérience unique et festive. Laissez-vous surprendre !
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 : MENU DE FÊTE */}
          <div className="bg-white rounded-3xl border border-[#e6ccb2] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
            <div className="relative w-full h-64 bg-zinc-100">
              <Image                  
                src="/noel.avif"
                alt="Table festive de Noël et menus de fêtes"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-3 text-[#6b1d2f]">🍽️ Menu de fête</h2>
                <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                  À l’occasion des grandes fêtes, notre chef vous propose des menus spéciaux, élaborés avec des produits d’exception. 
                  Laissez-vous tenter par une cuisine festive, généreuse et pleine de saveurs, pour des moments inoubliables en famille ou entre amis.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 4 : ÉVÉNEMENT PERSONNALISÉ */}
          <div className="bg-white rounded-3xl border border-[#e6ccb2] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
            <div className="relative w-full h-64 bg-zinc-100">
              <Image                  
                src="/terrasse.avif"
                alt="Terrasse et patio extérieurs du restaurant"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-3 text-[#6b1d2f]">🏰 Événement personnalisé</h2>
                <p className="text-zinc-600 text-sm md:text-base leading-relaxed mb-4">
                  Anniversaires, repas de famille, fêtes entre amis ou séminaires d’entreprise... Privatisez nos espaces modulables selon vos besoins. Profitez d'un service sur-mesure pour faire de votre événement un succès !
                </p>
                
                {/* COMPTEUR DE PLACES VISUEL */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="bg-[#fdf6f0] border border-[#e6ccb2] text-[#6b1d2f] text-xs font-semibold px-2.5 py-1 rounded-lg">
                    🛋️ Salle : 44 pl.
                  </span>
                  <span className="bg-[#fdf6f0] border border-[#e6ccb2] text-[#6b1d2f] text-xs font-semibold px-2.5 py-1 rounded-lg">
                    ☀️ Patio (Clim/Chauffé) : 40 pl.
                  </span>
                  <span className="bg-[#fdf6f0] border border-[#e6ccb2] text-[#6b1d2f] text-xs font-semibold px-2.5 py-1 rounded-lg">
                    ⛱️ Terrasse couverte : 40 pl.
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}