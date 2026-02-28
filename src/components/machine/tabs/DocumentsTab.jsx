import { useMemo } from 'react';
import Card from '../../ui/Card';
import EmptyState from '../../ui/EmptyState';
import PdfLink from '../shared/PdfLink';
import StatusBadge from '../shared/StatusBadge';

export default function DocumentsTab({ documents }) {
  const grouped = useMemo(() => {
    return documents.reduce((acc, doc) => {
      if (!acc[doc.category]) acc[doc.category] = [];
      acc[doc.category].push(doc);
      return acc;
    }, {});
  }, [documents]);

  if (!documents.length) {
    return <EmptyState heading="No documents listed" subtext="Add PDF links to this machine's JSON file." />;
  }

  return (
    <div className="space-y-4">
      {Object.entries(grouped).map(([category, docs]) => (
        <Card key={category}>
          <div className="flex items-center gap-2 mb-3">
            <h2 className="text-base font-bold text-slate-700">{category}</h2>
            <StatusBadge label={category} />
          </div>
          <div className="space-y-3">
            {docs.map((doc, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-800">{doc.title}</p>
                  {doc.description && (
                    <p className="text-sm text-slate-500 mt-0.5">{doc.description}</p>
                  )}
                </div>
                <PdfLink file={doc.file} label="Open PDF" />
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
