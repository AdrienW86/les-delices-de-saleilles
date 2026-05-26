import Gallery from '@/components/Gallery';

export default function Pictures() {
  return (
    <main className="w-full max-w-6xl mx-auto py-12 px-4 md:px-8 bg-[#fdf6f0]">
      
      {/* Titre de la page */}
      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide text-[#6b1d2f] text-center mb-10">
        Nos photos
      </h2>
      
      {/* Intégration de la galerie */}
      <Gallery />
      
    </main>
  );
}