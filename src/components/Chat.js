import React, { useState } from 'react';
import Messages from '../components/Messages';
import Input from '../components/Input';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    setMessages([...messages, { type: 'sent', text }]);
  };

  return (
    <div className='w-2/3 h-full bg-[#131313] max-sm:w-full'>
      <Messages messages={messages} />
      <Input onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
