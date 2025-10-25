import Header from '@/components/Header/Header';
import SimpleBanner2 from '@/components/SimpleBanner2/SimpleBanner2';
import Karaoke from '@/components/Karaoke/Karaoke'
import Footer from '@/components/Footer/Footer';


export default function Page() {
  return (
    <main>
      <Header />
      <SimpleBanner2 url="/karaoke3.png" />
      <Karaoke />
      <Footer />
    </main>
  );
}