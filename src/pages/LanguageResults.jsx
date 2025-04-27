import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '../context/ThemeContext';
import { resetState } from '../store/slices/languageDetectionSlice';

const LanguageResults = () => {
  const { data, isLoading } = useSelector((state) => state.languageDetection);
  const { isDarkMode } = useTheme();
  const dispatch = useDispatch();

  if (!data) return null;

  const handleReset = () => {
    dispatch(resetState());
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6">
      <div className={`rounded-xl shadow-xl p-8 ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
      }`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-2xl font-bold ${
            isDarkMode
              ? 'bg-gradient-to-r from-blue-400 to-blue-600'
              : 'bg-gradient-to-r from-blue-600 to-blue-800'
            } bg-clip-text text-transparent`}>
            Language Detection Results
          </h2>
          <button
            onClick={handleReset}
            className={`px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-[1.02] ${
              isDarkMode
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-red-600 hover:bg-red-700'
            }`}
          >
            Reset
          </button>
        </div>
        <div className="space-y-4">
          {Object.entries(data).map(([language, percentage]) => (
            <div key={language} className="flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium capitalize">
                  {language === 'hi' ? 'Hindi' :
                   language === 'gu' ? 'Gujarati' :
                   language === 'bn' ? 'Bengali' :
                   language === 'english' ? 'English' : language}
                </span>
                <span className="font-semibold">{percentage}%</span>
              </div>
              <div className={`w-full h-2 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div
                  className={`h-full rounded-full ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-blue-400 to-blue-500'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600'
                  }`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageResults;