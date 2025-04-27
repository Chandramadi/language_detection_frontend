import './App.css';
import FileUpload from './components/FileUpload';
import LanguageResults from './pages/LanguageResults';

function App() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Detect Document Language
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
        Upload your PDF document and let our AI detect the language it's written in. Fast, accurate, and secure.
      </p>
      <FileUpload />
      <LanguageResults />
    </div>
  );
}

export default App;
