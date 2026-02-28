import dec3 from './machines/dec-3.json';
import pmma from './machines/pmma.json';
import aopm3 from './machines/aopm-3.json';
import aopm6 from './machines/aopm-6.json';
import aopm7 from './machines/aopm-7.json';
import met2 from './machines/met-2.json';
import mopm3 from './machines/mopm-3.json';
import mopm5 from './machines/mopm-5.json';
import vti2 from './machines/vti-2.json';
import vti4 from './machines/vti-4.json';

export const machines = [
  dec3,
  pmma,
  aopm3,
  aopm6,
  aopm7,
  met2,
  mopm3,
  mopm5,
  vti2,
  vti4,
];

export function getMachineById(id) {
  return machines.find(m => m.id === id) ?? null;
}
