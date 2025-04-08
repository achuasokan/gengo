import { FaExchangeAlt } from 'react-icons/fa';

export const ActionButtons = ({
  onTranslate,
  onSwapLanguages,
  isTranslating,
  disabled,
}) => {
  return (
    <div className="flex justify-between items-center mt-8">
  <button
    onClick={onSwapLanguages}
    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 shadow-sm"
    title="Swap languages"
  >
    <FaExchangeAlt className="w-5 h-5" />
    <span className="hidden sm:inline">Swap Languages</span>
  </button>

  <button
    onClick={onTranslate}
    disabled={isTranslating || disabled}
    className={`px-8 py-3 rounded-xl text-white font-medium shadow-lg transition-all duration-200 ${
      isTranslating || disabled
        ? 'bg-gradient-to-r from-blue-400 to-purple-400 cursor-not-allowed opacity-80'
        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl'
    }`}
  >
    {isTranslating ? (
      <span className="flex items-center justify-center gap-2">
        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Translating...
      </span>
    ) : (
      'Translate Now'
    )}
  </button>
</div>
  );
};