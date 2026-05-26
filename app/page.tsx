import Banner from '@/components/Banner';
import Equipment from '@/components/Equipment';
import Description from '@/components/Description';


export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdf6f0] overflow-x-hidden">
      <Banner />
      <Equipment />
      <Description />   
    </main>
  );
}