import StatusBadge from './shared/StatusBadge';

export default function MachineHeader({ machine }) {
  const { name, model, manufacturer, serialNumber, location, notes } = machine;

  return (
    <div className="bg-white border border-slate-200 rounded-lg shadow-sm p-5 mb-4">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className="bg-slate-100 rounded-lg p-4 flex items-center justify-center shrink-0 w-20 h-20">
          <svg
            className="w-10 h-10 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-start gap-2 mb-1">
            <h1 className="text-2xl font-bold text-slate-800 leading-tight">{name}</h1>
            <StatusBadge label={location} />
          </div>
          <p className="text-slate-500 text-base mb-3">
            {manufacturer} &mdash; {model}
            {serialNumber && (
              <span className="ml-2 text-slate-400 text-sm">S/N: {serialNumber}</span>
            )}
          </p>
          {notes && (
            <div className="bg-amber-50 border border-amber-200 rounded p-3 text-sm text-amber-900">
              <span className="font-semibold">Notes: </span>{notes}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
