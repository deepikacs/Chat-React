import React from 'react'
import '../Dashboard/Dashboard.css';

export default ({ name, message }) =>
  <p>
    <strong className="msg-align">{name}</strong> <em className="msg-align">{message}</em>
  </p>
