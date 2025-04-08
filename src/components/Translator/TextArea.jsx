import { FaCopy, FaVolumeUp } from 'react-icons/fa';
import { copyToClipboard, speakText } from './utils';

export const TextArea = ({
  value,
  onChange,
  placeholder,
  readOnly = false,
  language,
  className = '',
}) => {
  return (
    <div className={`relative ${className}`}>
  <textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    readOnly={readOnly}
    className={`w-full h-72 p-5 text-lg rounded-xl border-0 ring-1 ring-gray-300 dark:ring-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none transition-all duration-200 ${
      readOnly ? 'bg-opacity-50 dark:bg-opacity-50' : ''
    }`}
  />
  
  {value && (
    <div className="absolute top-3 right-3 flex gap-2 bg-white dark:bg-gray-700 p-1 rounded-lg shadow-sm">
      <button
        onClick={() => speakText(value, language)}
        className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
        title="Listen"
      >
        <FaVolumeUp className="w-5 h-5" />
      </button>
      <button
        onClick={() => copyToClipboard(value)}
        className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
        title="Copy"
      >
        <FaCopy className="w-5 h-5" />
      </button>
    </div>
  )}
  
  {/* Character counter */}
  {!readOnly && (
    <div className={`absolute bottom-3 right-3 text-xs ${
      value.length > 450 ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'
    }`}>
      {value.length}/500
    </div>
  )}
</div>
  );
};