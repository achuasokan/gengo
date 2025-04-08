import axios from 'axios';

const MY_MEMORY_API = 'https://api.mymemory.translated.net/get';

export const translateText = async (text, sourceLang, targetLang) => {
  if (!text.trim()) return '';
  
  try {
    const response = await axios.get(
      `${MY_MEMORY_API}?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`
    );
    
    // Handle MyMemory API response structure
    if (response.data.responseStatus === 200) {
      return response.data.responseData.translatedText;
    } else {
      throw new Error(response.data.responseDetails || 'Translation failed');
    }
  } catch (error) {
    console.error('Translation error:', error);
    throw new Error(
      error.response?.data?.responseDetails || 
      error.message || 
      'Translation service unavailable. Please try again later.'
    );
  }
};