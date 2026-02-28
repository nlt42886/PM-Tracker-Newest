const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'parts', label: 'Parts List' },
  { id: 'pinouts', label: 'Pin-outs' },
  { id: 'documents', label: 'Documents' },
  { id: 'troubleshooting', label: 'Troubleshooting' },
];

export default function TabNav({ activeTab, onTabChange }) {
  return (
    <div className="border-b border-slate-200 bg-white overflow-x-auto">
      <div className="flex whitespace-nowrap max-w-6xl mx-auto px-4">
        {TABS.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`min-h-[44px] px-4 py-3 text-base font-medium border-b-2 transition-colors ${
                isActive
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
