import React, { useState } from 'react';
import Send from '../assets/Send.png';

const Input = ({ onSendMessage }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendClick = () => {
    if (inputText.trim() !== '') {
      onSendMessage(inputText);
      setInputText('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendClick();
    }
  };

  return (
    <div className='text-white h-[40px] w-full flex items-center justify-center gap-3 max-sm:gap-1'>
      <input
        type='text'
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        className='w-10/12 ml-10 max-sm:ml-5 h-full pl-5 bg-transparent border text-white placeholder:text-white placeholder:text-opacity-50'
        placeholder='Type a message here...'
      />
      <button className='cursor-pointer sentBtn' onClick={handleSendClick}>
        <img src={Send} alt='img' className='h-12 w-12 mb-3' />
      </button>
    </div>
  );
};

export default Input;
