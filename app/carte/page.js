import Header from '@/components/Header/Header';
import Banner from '@/components/Banner/Banner';
import Menu from '@/components/Menu/Menu';
import CardMenu from '@/components/CardMenu/CardMenu';
import Footer from '@/components/Footer/Footer';
import menuData from '@/app/menuData';

export default function Page() {
  return (
    <main>
      <Header />
      <Banner />
      <Menu title="Les Boissons Non Alcoolisées" items={menuData.boissons.nonAlcoolisees} />
      <Menu title="Les Apéritifs" items={menuData.boissons.aperitifs} />
      <Menu title="Les Boissons chaudes" items={menuData.boissons.chaudes} />
      <Menu title="Les Bières Pression" items={menuData.boissons.bierePression}/>
      <Menu title="Les Bières Bouteilles" items={menuData.boissons.biereBouteilles}/>
      <Menu title="Les Vins" items={menuData.boissons.vin}/>
      <Menu title="Les Entrées" items={menuData.entrees} />
      <Menu title="Les Pizzas" items={menuData.pizza} />
      <Menu title="Les Viandes" items={menuData.viandes} />
      <Menu title="Les Plats de la Mer" items={menuData.mer} />
      <Menu title="Plats Chinois" items={menuData.platsChinois} />
      <Menu title="Les Desserts" items={menuData.desserts} />
       <CardMenu/>
      <Footer />
    </main>
  );
}
