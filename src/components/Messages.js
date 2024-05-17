import React, { useState, useEffect } from 'react';
import Message from '../components/Message';

const Messages = ({ messages }) => {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    // Add default messages when the component mounts
    setMessageList([
      { type: 'sent', text: 'This is sender message' },
      { type: 'receeived', text: 'This is message received' },
      ...messages // Append existing messages if any
    ]);
  }, [messages]);

  return (
    <div className='messages h-[660px] w-full overflow-scroll scrollbar-hide max-sm:h-[530px]'>
      {messageList.map((msg, index) => (
        <Message key={index} type={msg.type} text={msg.text} />
      ))}
    </div>
  );
};

export default Messages;
