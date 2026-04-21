import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';





const Stats = ({ entries }) => {
  const data = [
    { name: 'Call', value: entries.filter(e => e.type === 'Call').length },
    { name: 'Text', value: entries.filter(e => e.type === 'Text').length },
    { name: 'Video', value: entries.filter(e => e.type === 'Video').length },
  ].filter(d => d.value > 0);

  const COLORS = ['#4F46E5', '#10B981', '#F59E0B'];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Friendship Analytics</h1>
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-96">
        {entries.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} innerRadius={80} outerRadius={120} paddingAngle={5} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-500 mt-20">No data yet. Log some interactions!</p>
        )}
      </div>
    </div>
  );
};

export default Stats;
