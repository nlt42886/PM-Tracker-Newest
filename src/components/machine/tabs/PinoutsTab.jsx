import Card from '../../ui/Card';
import Table from '../../ui/Table';
import EmptyState from '../../ui/EmptyState';

const WIRE_COLOR_STYLES = {
  Red: 'bg-red-500',
  Black: 'bg-slate-800',
  Yellow: 'bg-yellow-400',
  Green: 'bg-green-500',
  Orange: 'bg-orange-500',
  White: 'bg-white border border-slate-300',
  Blue: 'bg-blue-500',
  Violet: 'bg-violet-500',
  Purple: 'bg-purple-500',
  Brown: 'bg-amber-800',
  Gray: 'bg-slate-400',
  Pink: 'bg-pink-400',
};

function WireColorDot({ color }) {
  const baseColor = color.split('/')[0].trim();
  const dotClass = WIRE_COLOR_STYLES[baseColor] || 'bg-slate-300';
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`inline-block w-3 h-3 rounded-full shrink-0 ${dotClass}`} />
      <span className="text-slate-700">{color}</span>
    </span>
  );
}

export default function PinoutsTab({ pinouts }) {
  if (!pinouts.length) {
    return <EmptyState heading="No pin-out data" subtext="Add connector data to this machine's JSON file." />;
  }

  return (
    <div className="space-y-4">
      {pinouts.map((connector) => (
        <Card key={connector.connectorId} className="p-0 overflow-hidden">
          <div className="bg-slate-800 text-white px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-1">
            <span className="font-bold text-amber-400 font-mono">{connector.connectorId}</span>
            <span className="text-slate-300 text-sm sm:ml-2">&mdash; {connector.connectorName}</span>
          </div>
          {connector.description && (
            <p className="text-sm text-slate-500 px-4 py-2 border-b border-slate-100">{connector.description}</p>
          )}
          <Table headers={['Pin', 'Signal', 'Wire Color', 'Voltage', 'Description']}>
            {connector.pins.map((pin, i) => (
              <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-3 font-mono font-bold text-slate-700 whitespace-nowrap">{pin.number}</td>
                <td className="px-4 py-3 font-mono text-sm text-blue-700 font-semibold whitespace-nowrap">{pin.signal}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <WireColorDot color={pin.color} />
                </td>
                <td className="px-4 py-3 text-slate-600 text-sm whitespace-nowrap">{pin.voltage}</td>
                <td className="px-4 py-3 text-slate-700">{pin.description}</td>
              </tr>
            ))}
          </Table>
        </Card>
      ))}
    </div>
  );
}
