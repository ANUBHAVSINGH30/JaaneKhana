import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Demo from './components/Demo';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Navbar />
        <Hero />
        <About />
        <Demo />
        <Footer />
      </DndProvider>
    </>
  )
}

export default App
