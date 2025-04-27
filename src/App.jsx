import FileUpload from './components/FileUpload'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow container mx-auto py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800 dark:text-white">
              Detect Document Language
            </h1>
            <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
              Upload your PDF document and let our AI detect the language it's written in. Fast, accurate, and secure.
            </p>
            <FileUpload />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App;
