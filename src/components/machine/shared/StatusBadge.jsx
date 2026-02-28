const colorMap = {
  Electrical: 'bg-blue-100 text-blue-800',
  Mechanical: 'bg-amber-100 text-amber-800',
  Hydraulic: 'bg-cyan-100 text-cyan-800',
  Software: 'bg-violet-100 text-violet-800',
  Manual: 'bg-green-100 text-green-800',
  Schematic: 'bg-orange-100 text-orange-800',
  Lubrication: 'bg-lime-100 text-lime-800',
  Service: 'bg-rose-100 text-rose-800',
};

export default function StatusBadge({ label, colorKey }) {
  const colorClass = colorMap[colorKey || label] || 'bg-slate-100 text-slate-700';
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${colorClass}`}>
      {label}
    </span>
  );
}
