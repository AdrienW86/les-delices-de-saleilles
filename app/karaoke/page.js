import Header from '@/components/Header/Header';
import SimpleBanner from '@/components/SimpleBanner/SimpleBanner';
import Karaoke from '@/components/Karaoke/Karaoke'
import Footer from '@/components/Footer/Footer';


export default function Page() {
  return (
    <main>
      <Header />
      <SimpleBanner url="/dj.avif" />
      <Karaoke />
      <Footer />
    </main>
  );
}