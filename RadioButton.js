import React, { useState } from 'react';
import './CheckBox.css';

const RadioButton = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleRadioChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <label className="custom-radio">
        <input type="radio" value="option1" checked={selectedOption === 'option1'} onChange={() => handleRadioChange('option1')} />
        <span className="radio-checkmark"></span>
        Option 1
      </label>
      <label className="custom-radio">
        <input type="radio" value="option2" checked={selectedOption === 'option2'} onChange={() => handleRadioChange('option2')} />
        <span className="radio-checkmark"></span>
        Option 2
      </label>
    </div>
  );
};

export default RadioButton;
