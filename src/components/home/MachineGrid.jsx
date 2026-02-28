import { useState, useMemo } from 'react';
import MachineCard from './MachineCard';
import EmptyState from '../ui/EmptyState';
import SearchBar from '../machine/shared/SearchBar';

export default function MachineGrid({ machines }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const categories = useMemo(
    () => [...new Set(machines.map((m) => m.category).filter(Boolean))].sort(),
    [machines]
  );

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return machines.filter((m) => {
      const matchesSearch = !q || m.name.toLowerCase().includes(q);
      const matchesCategory = !categoryFilter || m.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [machines, searchQuery, categoryFilter]);

  const grouped = useMemo(() => {
    const groups = {};
    filtered.forEach((m) => {
      const cat = m.category || 'Other';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(m);
    });
    Object.keys(groups).forEach((cat) => {
      groups[cat].sort((a, b) => a.name.localeCompare(b.name));
    });
    return groups;
  }, [filtered]);

  const sortedCategories = Object.keys(grouped).sort();

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search machines..."
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border border-slate-300 rounded-lg px-3 py-2 text-base text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white min-h-[44px]"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {sortedCategories.length === 0 ? (
        <EmptyState
          heading="No machines found"
          subtext="Try adjusting your search or category filter."
        />
      ) : (
        <div className="space-y-8">
          {sortedCategories.map((cat) => (
            <div key={cat}>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-3 border-b border-slate-200 pb-2">
                {cat}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {grouped[cat].map((machine) => (
                  <MachineCard key={machine.id} machine={machine} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
