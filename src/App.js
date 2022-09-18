import './App.css';
import Reasons from './components/Reason/Reasons';
import Hero from './components/HeroSection/Hero'
import Programs from './components/Programs/Programs';
import Plans from './components/Plans/Plans'
import Testimonials from './components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
    </div>
  );
}

export default App;
