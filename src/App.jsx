import { Translator } from './components/Translator/Translator';
import { ErrorBoundary } from './components/ErrorBoundary';
function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <ErrorBoundary>
      <Translator />
      </ErrorBoundary>
    </div>
  );
}

export default App;