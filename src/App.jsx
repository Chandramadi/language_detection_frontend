import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FileUpload from './components/FileUpload';
import LanguageResults from './pages/LanguageResults';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <FileUpload />
          <LanguageResults />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
