// components/Form.js
import { SetStateAction, useState } from 'react';
import toast from 'react-hot-toast';

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // Check if the input value is empty
    if (inputValue.trim() === '') {
      toast.error('This field is required');
      return; // Prevent form submission if the field is empty
    }
    
    // Handle successful form submission
    setError('');
    toast.success('Form submitted successfully');
  };

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="inputField">Input Field</label>
        <input
          type="text"
          id="inputField"
          value={inputValue}
          onChange={handleChange}
          required // This will ensure the input is required
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      
      <button type="submit" disabled={inputValue.trim() === ''}>
        Submit
      </button>
    </form>
  );
};

export default Form;
