import { Link } from 'react-router-dom';

const categoryStyles = {
  Paint: {
    header: 'bg-green-50 border-green-100',
    icon: 'text-green-300 group-hover:text-green-400',
    accent: 'border-l-4 border-l-green-400',
  },
  Metalizers: {
    header: 'bg-blue-50 border-blue-100',
    icon: 'text-blue-300 group-hover:text-blue-400',
    accent: 'border-l-4 border-l-blue-400',
  },
};

const defaultStyle = {
  header: 'bg-slate-100 border-slate-200',
  icon: 'text-slate-300 group-hover:text-amber-300',
  accent: '',
};

export default function MachineCard({ machine }) {
  const { id, name, model, manufacturer, location, category, logo } = machine;
  const style = categoryStyles[category] ?? defaultStyle;
  const subtitle = [manufacturer, model].filter(Boolean).join(' \u2014 ');

  return (
    <Link
      to={`/machines/${id}`}
      className={`group block bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-150 ${style.accent}`}
    >
      <div className={`rounded-t-lg h-36 flex items-center justify-center border-b transition-colors ${style.header}`}>
        {logo ? (
          <img
            src={logo}
            alt={manufacturer || name}
            className="max-h-20 max-w-[160px] w-auto object-contain"
          />
        ) : (
          <svg
            className={`w-16 h-16 transition-colors ${style.icon}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold text-slate-800 group-hover:text-amber-700 transition-colors leading-tight">
          {name}
        </h2>
        {subtitle && (
          <p className="text-sm text-slate-500 mt-0.5">{subtitle}</p>
        )}
        {location && (
          <p className="text-xs text-slate-400 mt-2">{location}</p>
        )}
      </div>
    </Link>
  );
}
