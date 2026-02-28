import Card from '../../ui/Card';
import StatusBadge from '../shared/StatusBadge';

function InfoRow({ label, value }) {
  if (!value) return null;
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4 py-2 border-b border-slate-100 last:border-0">
      <span className="text-sm font-semibold text-slate-500 sm:w-40 shrink-0">{label}</span>
      <span className="text-base text-slate-800">{value}</span>
    </div>
  );
}

export default function OverviewTab({ machine, onTabChange }) {
  const { name, model, manufacturer, serialNumber, location, notes, parts, pinouts, documents, troubleshooting } = machine;

  return (
    <div className="space-y-4">
      <Card>
        <h2 className="text-lg font-bold text-slate-700 mb-3">Machine Information</h2>
        <InfoRow label="Machine Name" value={name} />
        <InfoRow label="Model" value={model} />
        <InfoRow label="Manufacturer" value={manufacturer} />
        <InfoRow label="Serial Number" value={serialNumber} />
        <div className="flex flex-col sm:flex-row sm:gap-4 py-2">
          <span className="text-sm font-semibold text-slate-500 sm:w-40 shrink-0">Location</span>
          <StatusBadge label={location} />
        </div>
      </Card>

      {notes && (
        <Card>
          <h2 className="text-lg font-bold text-slate-700 mb-2">Notes</h2>
          <p className="text-base text-slate-700 leading-relaxed">{notes}</p>
        </Card>
      )}

      <Card>
        <h2 className="text-lg font-bold text-slate-700 mb-3">Quick Access</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { id: 'parts', label: 'Parts List', count: parts.length, icon: '🔩' },
            { id: 'pinouts', label: 'Pin-outs', count: pinouts.length, icon: '🔌' },
            { id: 'documents', label: 'Documents', count: documents.length, icon: '📄' },
            { id: 'troubleshooting', label: 'Troubleshooting', count: troubleshooting.length, icon: '🔧' },
          ].map(({ id, label, count, icon }) => (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className="flex flex-col items-center justify-center p-4 bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-300 rounded-lg transition-colors min-h-[80px] text-center"
            >
              <span className="text-2xl mb-1">{icon}</span>
              <span className="text-sm font-semibold text-slate-700">{label}</span>
              <span className="text-xs text-slate-400">{count} items</span>
            </button>
          ))}
        </div>
      </Card>
    </div>
  );
}
