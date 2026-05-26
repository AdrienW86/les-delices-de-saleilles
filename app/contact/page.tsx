import Map from '@/components/Map';
import Form from '@/components/Form';

export default function Contact() {
  return (
    <main className="w-full max-w-4xl mx-auto py-12 px-4 md:px-8 bg-[#fdf6f0]">
      
      {/* Titre "Nous contacter" harmonisé avec la charte */}
      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide text-[#6b1d2f] text-center mb-10">
        Nous contacter
      </h2>    
      
      {/* Conteneurs pour espacer proprement la carte et le formulaire */}
      <div className="mb-10 w-full rounded-2xl overflow-hidden shadow-sm border border-[#e6ccb2]">
        <Map />
      </div>
      
      <div className="w-full">
        <Form />
      </div>
     
    </main>
  );
}