// useSelects.ts
import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

export const useSelects = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['',]);

  const handleChange = (index: number) => (event: SelectChangeEvent<unknown>) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = event.target.value as string;
    setSelectedOptions(newSelectedOptions);
  };

  return {
    selectedOptions,
    handleChange,
  };
};
