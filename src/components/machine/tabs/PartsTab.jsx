import { useState, useMemo } from 'react';
import Card from '../../ui/Card';
import Table from '../../ui/Table';
import EmptyState from '../../ui/EmptyState';
import SearchBar from '../shared/SearchBar';

export default function PartsTab({ parts }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase();
    if (!q) return parts;
    return parts.filter(
      (p) =>
        p.partNumber.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        (p.notes && p.notes.toLowerCase().includes(q))
    );
  }, [parts, searchQuery]);

  if (!parts.length) {
    return <EmptyState heading="No parts listed" subtext="Add parts to this machine's JSON file." />;
  }

  return (
    <div className="space-y-4">
      <div className="max-w-md">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search by part number, description, or location..."
        />
      </div>

      <Card className="p-0 overflow-hidden">
        {filtered.length === 0 ? (
          <div className="p-4">
            <EmptyState heading="No parts match your search" subtext="Try a different search term." />
          </div>
        ) : (
          <Table headers={['Part Number', 'Description', 'Qty', 'Location', 'Notes']}>
            {filtered.map((part, i) => (
              <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-3 font-mono text-sm text-slate-800 whitespace-nowrap">{part.partNumber}</td>
                <td className="px-4 py-3 text-slate-800">{part.description}</td>
                <td className="px-4 py-3 text-slate-700 text-center whitespace-nowrap">{part.quantity}</td>
                <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{part.location}</td>
                <td className="px-4 py-3 text-slate-500 text-sm">{part.notes || '—'}</td>
              </tr>
            ))}
          </Table>
        )}
      </Card>
    </div>
  );
}
