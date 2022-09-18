import './App.css';
import Reasons from './components/Reason/Reasons';
import Hero from './components/HeroSection/Hero'
import Programs from './components/Programs/Programs';
import Plans from './components/Plans/Plans'
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
