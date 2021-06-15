import React from 'react';

import withData from './with-data';

import './hoc.styles.scss';

const UserProfile = ({ data, name, email }) => (
  <div className='container'>
    <h1>{name}</h1>
    <h2>{email}</h2>
    <h3>Posts:</h3>
    {
      data.map(p => (
        <div className='post' key={p.id}>
          <h1>{p.title}</h1>
          <p>{p.body}</p>
        </div>
      ))
    }
  </div>
);

export default withData(UserProfile, 'https://jsonplaceholder.typicode.com/posts');
