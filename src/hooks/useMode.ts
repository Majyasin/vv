'use client';
import { useEffect, useState } from 'react';
import { create } from 'zustand';

export interface ModeStore {
  preciseMode: boolean;
  balancedMode: boolean;
  creativeMode: boolean;
  setMode: (mode: string, value: boolean) => void;
}

export const useMode = create<ModeStore>((set) => ({
  preciseMode: true,
  balancedMode: true,
  creativeMode: false,
  setMode: (mode: string, value: boolean) =>
    set(() => {
      if (typeof window !== 'undefined') {
        localStorage.setItem(mode, value.toString());
      }
      return { [mode]: value };
    }),
}));

export const useClientMode = () => {
  const { preciseMode, balancedMode, creativeMode, setMode } = useMode();
  const [hydrated, setHydrated] = useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: setMode is stable
  useEffect(() => {
    setHydrated(true);
    const precise =
      typeof window !== 'undefined' &&
      localStorage.getItem('preciseMode') !== 'false';
    const balanced =
      typeof window !== 'undefined' &&
      localStorage.getItem('balancedMode') === 'true';
    const creative =
      typeof window !== 'undefined' &&
      localStorage.getItem('creativeMode') === 'true';

    setMode('preciseMode', precise);
    setMode('balancedMode', balanced);
    setMode('creativeMode', creative);
  }, []);

  if (!hydrated) {
    return {
      preciseMode: true,
      balancedMode: true,
      creativeMode: false,
      setMode,
    }; // Default values
  }

  return { preciseMode, balancedMode, creativeMode, setMode };
};
