import React from 'react';
import withData from './with-data';

import './hoc.styles.scss';

const UserList = ({ data }) => {
  return (
    <div className='container user-list'>
      <h1>Users List</h1>
      {
        data.map(r => (
          <div className='post' key={r.id}>
            <h1>{r.name}</h1>
            <h2>{r.email}</h2>
          </div>
        ))
      }
    </div>
  );
};

export default withData(UserList, 'https://jsonplaceholder.typicode.com/users');
