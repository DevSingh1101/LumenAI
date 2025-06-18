import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

interface CommonInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
  isRequired?: boolean;
}

const CommonInput: React.FC<CommonInputProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  isRequired = true,
}) => (
  <FormControl isRequired={isRequired}>
    <FormLabel color="gray.700">{label}</FormLabel>
    <Input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      bg="gray.50"
      borderColor="gray.200"
      _hover={{ borderColor: 'brand.300' }}
      _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)' }}
      size="lg"
    />
  </FormControl>
);

export default CommonInput;
