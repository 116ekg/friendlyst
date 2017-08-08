import React from 'react'

const MessageListEntry = ({ message, friend, mainUser }) => {

  if (message.from === friend) {
    return (
      <div className="message-entry">
        {message.from}:{message.msg}
      </div>
    )
  } else if (message.to === friend && message.from === mainUser.nickname) {
    return (
      <div className="message-entry">
        {message.from}:{message.msg}
      </div>
    )
  }
  return (
      <div>
        
      </div>
    )
}

export default MessageListEntry