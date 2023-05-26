import { useState } from 'react';

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => setValue(e.target.value);

  const resetValue = () => setValue(initialValue);

  const inputProps = {
    value,
    onChange: handleChange,
  };

  return [inputProps, resetValue];
};

export default useFormInput;
