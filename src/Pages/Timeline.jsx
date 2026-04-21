import { useState } from 'react';
import { Phone, MessageSquare, Video, Calendar } from 'lucide-react';

const Timeline = ({ entries }) => {
  const [filter, setFilter] = useState('All');

  // C2. Timeline Filter Logic
  const filteredEntries = filter === 'All' 
    ? entries 
    : entries.filter(entry => entry.type === filter);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Timeline</h1>

      {/* Filter Dropdown */}
      <div className="mb-8">
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full md:w-64 p-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none transition"
        >
          <option value="All">All Interactions</option>
          <option value="Call">Calls</option>
          <option value="Text">Texts</option>
          <option value="Video">Videos</option>
        </select>
      </div>

      {/* Timeline List */}
      <div className="space-y-3">
        {filteredEntries.length > 0 ? (
          filteredEntries.map((entry) => (
            <div 
              key={entry.id} 
              className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 hover:shadow-md transition group"
            >
              {/* Icon based on type */}
              <div className="p-3 bg-gray-50 rounded-lg text-gray-500 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition">
                {entry.type === 'Call' && <Phone size={20} />}
                {entry.type === 'Text' && <MessageSquare size={20} />}
                {entry.type === 'Video' && <Video size={20} />}
                {!['Call', 'Text', 'Video'].includes(entry.type) && <Calendar size={20} />}
              </div>

              <div>
                <h3 className="font-bold text-gray-900 leading-tight">
                  {entry.type} with {entry.friendName}
                </h3>
                <p className="text-xs text-gray-400 mt-1">{entry.date}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-400 italic">No activities found for this filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
