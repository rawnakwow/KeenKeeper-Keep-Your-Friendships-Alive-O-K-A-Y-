import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      {/* Visual 404 Header */}
      <h1 className="text-9xl font-black text-gray-200">404</h1>
      
      <div className="absolute">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Oops! Page Not Found</h2>
        <p className="text-gray-500 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        {/* Back to Home Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-[#1a3a32] text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition shadow-lg"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
