import { useState } from 'react';
import { translateText } from '../../services/translationService';
import { LanguageSelector } from './LanguageSelector';
import { TextArea } from './TextArea';
import { ActionButtons } from './ActionButtons';

export const Translator = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');
  const [isTranslating, setIsTranslating] = useState(false);
  const [error, setError] = useState(null);


  const handleTranslate = async () => {
    if (!text.trim()) {
      setError('Please enter text to translate');
      return;
    }

    setIsTranslating(true);
    setError(null);
    
    try {
      const result = await translateText(text, sourceLang, targetLang);
      setTranslatedText(result);
    } catch (error) {
      setError(error.message);
      setTranslatedText('');
    } finally {
      setIsTranslating(false);
    }
  };

  const handleSwapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setText(translatedText);
    setTranslatedText(text);
    setError(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 backdrop-blur-lg bg-opacity-80">
    <h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Language Translator
    </h1>
      {error && (
  <div className="mt-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-200 flex items-start gap-3 animate-fade-in">
    <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <div>
      <p className="font-medium">Translation Error</p>
      <p className="text-sm">{error}</p>
    </div>
  </div>
)}

      <div className="flex flex-col md:flex-row gap-6">
        {/* Source Language Section */}
        <div className="flex-1">
          <LanguageSelector
            value={sourceLang}
            onChange={setSourceLang}
            label="From:"
            id="sourceLang"
          />
          <TextArea
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setError(null);
            }}
            placeholder="Enter text to translate..."
            language={sourceLang}
          />
        </div>

        {/* Target Language Section */}
        <div className="flex-1">
          <LanguageSelector
            value={targetLang}
            onChange={setTargetLang}
            label="To:"
            id="targetLang"
          />
          <TextArea
            value={translatedText}
            readOnly
            placeholder="Translation will appear here..."
            language={targetLang}
          />
        </div>
      </div>

      <ActionButtons
        onTranslate={handleTranslate}
        onSwapLanguages={handleSwapLanguages}
        isTranslating={isTranslating}
        disabled={!text.trim()}
      />

      <div className="mt-4 text-xs text-gray-500 text-center">
        Developed By Achu
      </div>
    </div>
  );
};