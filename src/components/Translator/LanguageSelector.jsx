import { languages } from './utils';

export const LanguageSelector = ({ value, onChange, label, id }) => {
  return (

    <div className="mb-6">
  <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
    {label}
  </label>
  <div className="relative">
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full pl-4 pr-10 py-3 text-base border-0 ring-1 ring-gray-300 dark:ring-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none"
    >
      {languages.map((lang) => (
        <option key={`${id}-${lang.code}`} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</div>
  );
};