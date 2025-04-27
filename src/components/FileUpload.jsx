import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const { isDarkMode } = useTheme();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setMessage('');
    } else {
      setFile(null);
      setMessage('Please select a PDF file');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'application/pdf') {
      setFile(droppedFile);
      setMessage('');
    } else {
      setMessage('Please select a PDF file');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage('Please select a file first');
      return;
    }

    // TODO: Add your file upload logic here
    setMessage('File uploaded successfully!');
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className={`rounded-xl shadow-xl p-8 backdrop-blur-sm transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-gray-800/90 text-white'
          : 'bg-white text-gray-900'
      }`}>
        <h2 className={`text-3xl font-bold mb-6 text-center ${
          isDarkMode
            ? 'bg-gradient-to-r from-blue-400 to-blue-600'
            : 'bg-gradient-to-r from-blue-600 to-blue-800'
        } bg-clip-text text-transparent`}>
          Language Detection
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-10 transition-all duration-300 ease-in-out ${
              isDragging
                ? isDarkMode 
                  ? 'border-blue-400 bg-blue-900/30'
                  : 'border-blue-500 bg-blue-50'
                : isDarkMode
                  ? 'border-gray-600 hover:border-blue-400 hover:bg-gray-700/50'
                  : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
            }`}
          >
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf"
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="text-center space-y-4">
                <div className={`w-16 h-16 mx-auto mb-4 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-500'
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p className={isDarkMode ? "text-gray-300" : "text-gray-600"} text-lg>
                  Drag and drop your PDF here or
                </p>
                <p className={`font-semibold text-lg transition-colors ${
                  isDarkMode 
                    ? 'text-blue-400 hover:text-blue-300'
                    : 'text-blue-600 hover:text-blue-700'
                }`}>
                  Browse files
                </p>
                {file && (
                  <div className={`mt-4 p-3 rounded-lg ${
                    isDarkMode ? 'bg-blue-900/30' : 'bg-blue-50'
                  }`}>
                    <p className={isDarkMode ? "text-blue-300 font-medium" : "text-blue-700 font-medium"}>
                      {file.name}
                    </p>
                    <p className={isDarkMode ? "text-sm text-blue-400" : "text-sm text-blue-500"}>
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                )}
              </div>
            </label>
          </div>
          {message && (
            <div className={`p-4 rounded-lg ${
              message.includes('error') || message.includes('Please')
                ? isDarkMode
                  ? 'bg-red-900/50 text-red-300'
                  : 'bg-red-50 text-red-700'
                : isDarkMode
                  ? 'bg-green-900/50 text-green-300'
                  : 'bg-green-50 text-green-700'
            }`}>
              <p className="text-center font-medium">{message}</p>
            </div>
          )}
          <button
            type="submit"
            className={`w-full py-3 px-6 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-[1.02] ${
              file
                ? isDarkMode
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/20'
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg'
                : isDarkMode
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!file}
          >
            Upload and Detect Language
          </button>
        </form>
      </div>
    </div>
  );
};

export default FileUpload;