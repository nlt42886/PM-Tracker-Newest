import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useMachineData } from '../hooks/useMachineData';
import AppHeader from '../components/layout/AppHeader';
import Breadcrumb from '../components/layout/Breadcrumb';
import MachineHeader from '../components/machine/MachineHeader';
import TabNav from '../components/machine/TabNav';
import OverviewTab from '../components/machine/tabs/OverviewTab';
import PartsTab from '../components/machine/tabs/PartsTab';
import PinoutsTab from '../components/machine/tabs/PinoutsTab';
import DocumentsTab from '../components/machine/tabs/DocumentsTab';
import TroubleshootingTab from '../components/machine/tabs/TroubleshootingTab';

const TAB_LABELS = {
  overview: 'Overview',
  parts: 'Parts List',
  pinouts: 'Pin-outs',
  documents: 'Documents',
  troubleshooting: 'Troubleshooting',
};

export default function MachinePage() {
  const { machineId } = useParams();
  const machine = useMachineData(machineId);
  const [activeTab, setActiveTab] = useState('overview');

  if (!machine) {
    return (
      <div className="min-h-screen bg-slate-100">
        <AppHeader />
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <p className="text-5xl font-bold text-slate-300 mb-4">404</p>
          <p className="text-xl text-slate-600 mb-6">Machine &ldquo;{machineId}&rdquo; not found</p>
          <Link to="/" className="text-amber-600 hover:text-amber-700 font-medium">
            Return to machine list
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: machine.name, href: `/machines/${machine.id}` },
    { label: TAB_LABELS[activeTab] },
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      <AppHeader />
      <div className="bg-white border-b border-slate-200">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4">
        <MachineHeader machine={machine} />
      </div>

      <div className="sticky top-0 z-10 shadow-sm">
        <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4">
        {activeTab === 'overview' && (
          <OverviewTab machine={machine} onTabChange={setActiveTab} />
        )}
        {activeTab === 'parts' && <PartsTab parts={machine.parts} />}
        {activeTab === 'pinouts' && <PinoutsTab pinouts={machine.pinouts} />}
        {activeTab === 'documents' && <DocumentsTab documents={machine.documents} />}
        {activeTab === 'troubleshooting' && (
          <TroubleshootingTab troubleshooting={machine.troubleshooting} />
        )}
      </div>
    </div>
  );
}
