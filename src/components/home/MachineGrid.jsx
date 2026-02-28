import { useState, useMemo } from 'react';
import MachineCard from './MachineCard';
import EmptyState from '../ui/EmptyState';
import SearchBar from '../machine/shared/SearchBar';

export default function MachineGrid({ machines }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');

  const locations = useMemo(
    () => [...new Set(machines.map((m) => m.location))].sort(),
    [machines]
  );

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return machines.filter((m) => {
      const matchesSearch =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.model.toLowerCase().includes(q) ||
        m.manufacturer.toLowerCase().includes(q);
      const matchesLocation = !locationFilter || m.location === locationFilter;
      return matchesSearch && matchesLocation;
    });
  }, [machines, searchQuery, locationFilter]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search machines by name, model, or manufacturer..."
          />
        </div>
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="border border-slate-300 rounded-lg px-3 py-2 text-base text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white min-h-[44px]"
        >
          <option value="">All Locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          heading="No machines found"
          subtext="Try adjusting your search or location filter."
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((machine) => (
            <MachineCard key={machine.id} machine={machine} />
          ))}
        </div>
      )}
    </div>
  );
}
