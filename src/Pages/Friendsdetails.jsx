import { useParams } from 'react-router-dom';
import { Phone, MessageSquare, Video, Clock, Archive, Trash2, Edit2 } from 'lucide-react';
import toast from 'react-hot-toast';
import friendsData from '../Data/friends';


const FriendDetails = ({ addEntry }) => {
  const { id } = useParams();
  const friend = friendsData.find(f => f.id === parseInt(id));

  const handleCheckIn = (type) => {
    const newEntry = {
      id: Date.now(),
      friendName: friend.name,
      type: type,
      date: new Date().toLocaleDateString(),
      icon: type // 'Call', 'Text', or 'Video'
    };
    addEntry(newEntry);
    toast.success(`${type} with ${friend.name} logged!`);
  };

  if (!friend) return <div className="text-center py-20">Friend not found.</div>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <img src={friend.picture} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-indigo-50" alt={friend.name} />
        <h2 className="text-2xl font-bold text-center">{friend.name}</h2>
        <div className="flex justify-center my-3">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
            friend.status === 'overdue' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
          }`}>
            {friend.status}
          </span>
        </div>
        <p className="text-gray-500 text-sm text-center mb-6">{friend.bio}</p>
        
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-2 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"><Clock size={18}/> Snooze 2 Weeks</button>
          <button className="w-full flex items-center justify-center gap-2 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"><Archive size={18}/> Archive</button>
          <button className="w-full flex items-center justify-center gap-2 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition"><Trash2 size={18}/> Delete</button>
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:col-span-2 space-y-6">
        <div className="grid grid-cols-3 gap-4">
          <StatCard label="Days Since" value={friend.days_since_contact} />
          <StatCard label="Goal" value={`${friend.goal} days`} />
          <StatCard label="Next Due" value={friend.next_due_date} />
        </div>

        <div className="bg-indigo-600 text-white p-6 rounded-2xl flex justify-between items-center">
          <div>
            <p className="opacity-80">Relationship Goal</p>
            <p className="text-xl font-bold">Contact every {friend.goal} days</p>
          </div>
          <button className="p-2 bg-white/20 rounded-full hover:bg-white/30"><Edit2 size={20}/></button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="font-bold mb-4">Quick Check-In</h3>
          <div className="grid grid-cols-3 gap-4">
            <CheckInBtn icon={<Phone/>} label="Call" onClick={() => handleCheckIn('Call')} />
            <CheckInBtn icon={<MessageSquare/>} label="Text" onClick={() => handleCheckIn('Text')} />
            <CheckInBtn icon={<Video/>} label="Video" onClick={() => handleCheckIn('Video')} />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value }) => (
  <div className="bg-white p-4 rounded-xl border border-gray-100 text-center">
    <p className="text-gray-500 text-xs uppercase tracking-wider">{label}</p>
    <p className="text-lg font-bold text-indigo-600">{value}</p>
  </div>
);

const CheckInBtn = ({ icon, label, onClick }) => (
  <button onClick={onClick} className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-transparent bg-indigo-50 text-indigo-700 hover:border-indigo-600 transition">
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);

export default FriendDetails;
