import { Plus } from 'lucide-react';

const Banner = ({ totalFriends, onTrack, needAttention, interactions }) => {
  return (
    <section className="text-center py-16 bg-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Friends to keep close in your life
      </h1>
      <p className="text-gray-500 max-w-xl mx-auto mb-8 text-sm md:text-base">
        Your personal shelf of meaningful connections. Browse, track, and nurture the relationships that matter most.
      </p>
      
      <button className="inline-flex items-center gap-2 bg-[#1a3a32] text-white px-6 py-2.5 rounded-md hover:bg-opacity-90 transition mb-16">
        <Plus size={18} />
        Add a Friend
      </button>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto px-4">
        <SummaryCard label="Total Friends" value={totalFriends} />
        <SummaryCard label="On Track" value={onTrack} />
        <SummaryCard label="Need Attention" value={needAttention} />
        <SummaryCard label="Interactions This Month" value={interactions} />
      </div>
    </section>
  );
};

const SummaryCard = ({ label, value }) => (
  <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex flex-col items-center justify-center">
    <span className="text-3xl font-bold text-gray-900 mb-1">{value}</span>
    <span className="text-xs text-gray-400 uppercase font-semibold tracking-wider text-center">{label}</span>
  </div>
);

export default Banner;
