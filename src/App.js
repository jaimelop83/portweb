// Desc: Main App component
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
