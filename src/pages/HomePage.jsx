import AppHeader from '../components/layout/AppHeader';
import MachineGrid from '../components/home/MachineGrid';
import { machines } from '../data/index';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <AppHeader />
      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-800">Machine List</h1>
          <p className="text-slate-500 mt-1">Select a machine to view parts, wiring, documents, and troubleshooting guides.</p>
        </div>
        <MachineGrid machines={machines} />
      </main>
    </div>
  );
}
