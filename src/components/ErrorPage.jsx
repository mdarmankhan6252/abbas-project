import  { useState, useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react';

const ErrorPage = () => {
  const [counter, setCounter] = useState(10);
  
  useEffect(() => {
    const timer = counter > 0 && setInterval(() => {
      setCounter(counter - 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex flex-col items-center justify-center p-4 text-white">
      <div className="relative">
        <div className="absolute -inset-1 bg-pink-500 rounded-lg blur opacity-30 animate-pulse"></div>
        <div className="relative bg-black bg-opacity-80 p-8 rounded-lg shadow-2xl border border-purple-500 max-w-lg">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex items-center justify-center">
              <AlertTriangle size={48} className="text-pink-500 animate-bounce" />
            </div>
            
            <h1 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400">
              Oops! Something went wrong
            </h1>
            
            <div className="h-1 w-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full my-4"></div>
            
            <p className="text-gray-300 mb-6">
              The page you're looking for couldn't be found or an unexpected error has occurred.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button 
                onClick={() => window.location.reload()} 
                className="flex items-center justify-center gap-2 px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <RefreshCw size={16} />
                <span>Try Again</span>
              </button>
              
              <button 
                onClick={() => window.history.back()}
                className="flex items-center justify-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <ArrowLeft size={16} />
                <span>Go Back</span>
              </button>
              
              <button 
                onClick={() => window.location.href = '/'}
                className="flex items-center justify-center gap-2 px-5 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <Home size={16} />
                <span>Home</span>
              </button>
            </div>

            {counter > 0 && (
              <p className="text-sm text-gray-400">
                Redirecting to homepage in {counter} seconds...
              </p>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-sm text-purple-300 opacity-80">
        <p>Error Code: 404 | If the problem persists, please contact support.</p>
      </div>
    </div>
  );
};

export default ErrorPage;