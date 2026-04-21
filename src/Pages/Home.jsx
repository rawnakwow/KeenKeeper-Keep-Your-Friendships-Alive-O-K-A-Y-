import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Banner from "../Components/Banner";

// Note: Ensure the path and filename 'Friends.json' match your sidebar exactly
import friendsData from '../Data/Friends.json'; 

const Home = () => {
  const [loading, setLoading] = useState(true);

  // Requirement 10.2: Show loading animation while fetching data
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Simulate a short fetch delay
    return () => clearTimeout(timer);
  }, []);

  const total = friendsData.length;
  const onTrack = friendsData.filter(f => f.status === 'on-track').length;
  const overdue = friendsData.filter(f => f.status === 'overdue').length;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1a3a32]"></div>
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Requirement 2.0: Banner with Summary Cards */}
      <Banner 
        totalFriends={total} 
        onTrack={onTrack} 
        needAttention={overdue} 
        interactions={12} 
      />

      {/* Requirement 4.0: Your Friends Section */}
      <section className="container mx-auto px-4 mt-12">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Your Friends</h2>
        
        {/* Requirement 4.3 & 9.0: Responsive Grid (1 col mobile, 2 col tablet, 4 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {friendsData.map((friend) => (
            <Link 
              to={`/friend/${friend.id}`} 
              key={friend.id} 
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center group"
            >
              <img 
                src={friend.picture} 
                alt={friend.name} 
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-transparent group-hover:border-indigo-100 transition"
              />
              <h3 className="font-bold text-lg mb-1">{friend.name}</h3>
              <p className="text-gray-400 text-xs mb-4">{friend.days_since_contact} days ago</p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {friend.tags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 bg-gray-50 text-gray-500 text-[10px] rounded uppercase font-bold">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Requirement 4.2: Dynamic Status Colors */}
              <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                friend.status === 'overdue' ? 'bg-red-100 text-red-600' : 
                friend.status === 'almost due' ? 'bg-orange-100 text-orange-600' : 
                'bg-green-100 text-green-600'
              }`}>
                {friend.status}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
