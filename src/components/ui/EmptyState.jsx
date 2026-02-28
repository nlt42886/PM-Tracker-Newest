export default function EmptyState({ heading = 'No results found', subtext = '' }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-slate-400">
      <svg
        className="w-12 h-12 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-3-3v6m9-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <p className="text-lg font-medium text-slate-500">{heading}</p>
      {subtext && <p className="text-sm mt-1">{subtext}</p>}
    </div>
  );
}
