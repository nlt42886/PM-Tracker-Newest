import { useState } from 'react';
import Card from '../../ui/Card';
import EmptyState from '../../ui/EmptyState';
import StatusBadge from '../shared/StatusBadge';
import PdfLink from '../shared/PdfLink';

export default function TroubleshootingTab({ troubleshooting }) {
  const [activeId, setActiveId] = useState(null);

  if (!troubleshooting.length) {
    return (
      <EmptyState
        heading="No troubleshooting guides"
        subtext="Add troubleshooting entries to this machine's JSON file."
      />
    );
  }

  return (
    <div className="space-y-2">
      {troubleshooting.map((item) => {
        const isOpen = activeId === item.id;
        return (
          <Card key={item.id} className="p-0 overflow-hidden">
            <button
              onClick={() => setActiveId(isOpen ? null : item.id)}
              className="w-full flex items-center justify-between gap-3 px-4 py-4 text-left min-h-[56px] hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <StatusBadge label={item.category} colorKey={item.category} />
                <span className="font-semibold text-slate-800 text-base leading-snug">{item.symptom}</span>
              </div>
              <svg
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div className="border-t border-slate-200 px-4 py-4 bg-slate-50">
                <ol className="space-y-3 list-none">
                  {item.steps.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-white text-xs font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-slate-700 leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>

                {item.relatedDocument && (
                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-2">
                    <span className="text-sm text-slate-500 font-medium">Reference:</span>
                    <PdfLink
                      file={item.relatedDocument.file}
                      page={item.relatedDocument.page}
                      label="Open in manual"
                    />
                  </div>
                )}
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );
}
