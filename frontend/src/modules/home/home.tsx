import HomeDemo from './components/demo/demo';
import HomeHero from './components/hero/hero';
import './home.scss';

const AppHome = () => {
  return (
    <div id="home">
      <HomeHero></HomeHero>
      <HomeDemo></HomeDemo>
    </div>
  );
};

export default AppHome;
