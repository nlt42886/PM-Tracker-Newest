import cncMill1 from './machines/cnc-mill-1.json';
import hydraulicPress1 from './machines/hydraulic-press-1.json';
import conveyorA from './machines/conveyor-a.json';

export const machines = [
  cncMill1,
  hydraulicPress1,
  conveyorA,
];

export function getMachineById(id) {
  return machines.find(m => m.id === id) ?? null;
}
