import React, { createContext, useContext, useState } from 'react';

const CalculatorSettingsContext = createContext();

export function CalculatorSettingsProvider({ children }) {
  const [isScientific, setIsScientific] = useState(false);
  const [useDegrees, setUseDegrees] = useState(false);

  return (
    <CalculatorSettingsContext.Provider
      value={{ isScientific, setIsScientific, useDegrees, setUseDegrees }}
    >
      {children}
    </CalculatorSettingsContext.Provider>
  );
}

export function useCalculatorSettings() {
  return useContext(CalculatorSettingsContext);
}
