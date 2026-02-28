import { useMemo } from 'react';
import { getMachineById } from '../data/index.js';

export function useMachineData(id) {
  return useMemo(() => getMachineById(id), [id]);
}
