import './App.css';
import Reasons from './components/Reason/Reasons';
import Hero from './components/HeroSection/Hero'
import Programs from './components/Programs/Programs';
import Plans from './components/Plans/Plans'

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
    </div>
  );
}

export default App;
