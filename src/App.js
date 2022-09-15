import './App.css';
import Reasons from './components/Header/Reason/Reasons';
import Hero from './components/HeroSection/Hero'
import Programs from './components/Programs/Programs';

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
    </div>
  );
}

export default App;
