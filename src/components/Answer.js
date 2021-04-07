import React from 'react'

const Answer = ({ answer }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="header">{answer}</div>
      </div>
    </div>
  )
}

export default Answer
