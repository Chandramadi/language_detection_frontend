import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '../context/ThemeContext';
import { detectText, resetState } from '../store/slices/languageDetectionSlice';

const TextDetection = () => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const { isDarkMode } = useTheme();
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.languageDetection);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim() || isLoading) return;

    try {
      await dispatch(detectText(text)).unwrap();
      setError('');
    } catch (err) {
      setError('Error detecting language. Please try again.');
    }
  };

  const handleReset = () => {
    setText('');
    dispatch(resetState());
    setError('');
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Text Input Section */}
        <div className="flex-1">
          <div className={`rounded-xl shadow-xl p-8 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          }`}>
            <h2 className={`text-2xl font-bold mb-6 ${
              isDarkMode
                ? 'bg-gradient-to-r from-blue-400 to-blue-600'
                : 'bg-gradient-to-r from-blue-600 to-blue-800'
              } bg-clip-text text-transparent`}>
              Text Language Detection
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label 
                  htmlFor="text-input"
                  className={`block font-medium ${
                    isDarkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}
                >
                  Enter your text
                </label>
                <textarea
                  id="text-input"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Type or paste your text here..."
                  className={`w-full h-64 p-4 rounded-lg border focus:ring-2 focus:ring-opacity-50 transition-colors duration-200 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:ring-blue-600'
                  }`}
                  disabled={isLoading}
                ></textarea>
              </div>
              {error && (
                <div className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-red-900/50 text-red-300' : 'bg-red-50 text-red-700'
                }`}>
                  <p className="text-center font-medium">{error}</p>
                </div>
              )}
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={!text.trim() || isLoading}
                  className={`flex-1 py-3 px-6 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-[1.02] cursor-pointer ${
                    text.trim() && !isLoading
                      ? isDarkMode
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                        : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                      : isDarkMode
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    'Detect Language'
                  )}
                </button>
                {data && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className={`px-6 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-[1.02] ${
                      isDarkMode
                        ? 'bg-red-500 hover:bg-red-600'
                        : 'bg-red-600 hover:bg-red-700'
                    }`}
                  >
                    Reset
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Results Section */}
        <div className="flex-1">
          <div className={`rounded-xl shadow-xl p-8 h-full ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          }`}>
            <h2 className={`text-2xl font-bold mb-6 ${
              isDarkMode
                ? 'bg-gradient-to-r from-blue-400 to-blue-600'
                : 'bg-gradient-to-r from-blue-600 to-blue-800'
              } bg-clip-text text-transparent`}>
              Detection Results
            </h2>
            {data ? (
              <div className="space-y-6">
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-medium capitalize">
                      Language: {data.language === 'hi' ? 'Hindi' :
                               data.language === 'gu' ? 'Gujarati' :
                               data.language === 'bn' ? 'Bengali' :
                               data.language === 'english' ? 'English' : 
                               data.language}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg">
                      Confidence: {(data.confidence * 100).toFixed(2)}%
                    </span>
                  </div>
                  <div className={`w-full h-2 mt-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div
                      className={`h-full rounded-full ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-blue-400 to-blue-500'
                          : 'bg-gradient-to-r from-blue-500 to-blue-600'
                      }`}
                      style={{ width: `${data.confidence * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Display the detected text */}
                <div className={`mt-6 p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>
                  <h3 className="font-medium mb-2">Detected Text:</h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                    {data.text}
                  </p>
                </div>
              </div>
            ) : (
              <div className={`text-center py-12 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                <p>No results yet. Enter some text and click "Detect Language" to analyze.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextDetection;