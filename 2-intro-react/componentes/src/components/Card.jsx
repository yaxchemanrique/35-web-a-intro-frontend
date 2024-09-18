import React from 'react'
console.log('Card!')

function Card({fullName, job, email}) {
  return (
    <li>
      <h2>{fullName}</h2>
      <dl>
        <dt>Job</dt>
        <dd>{job}</dd>
        <dt>Email</dt>
        <dd>{email}</dd>
      </dl>
    </li>
  )
}

export default Card