import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Work from '../components/Work';
import WordPressWork from '../components/WordPressWork';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Work />
      <WordPressWork />
      <Footer />
    </>
  );
}
