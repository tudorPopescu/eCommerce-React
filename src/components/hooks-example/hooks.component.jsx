import React, { useState, useEffect } from 'react';

export const UseStateExample = () => {
  const [name, setName] = useState('Tudor');
  const [address, setAdress] = useState();

  return (
    <div>
      <h1>{ name }</h1>
      <h2> {address} </h2>
      <button onClick={() => setName(`Andrei` + name)}>Set name to Tudor Popescu</button>
      <button onClick={() => setAdress('Amsterdam')}>Set address</button>
    </div>
  );
};

export const UseEffectExample = () => {
  const [user, setUser] = useState();
  const [searchQuery, setSearchQuery] = useState('Bret');

  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`);
      const resJson = await response.json();

      setUser(resJson[0]);
      console.log(resJson);
    }

    fetchFunc();
  }, [searchQuery]);

  return (
    <div>
      <input type='search' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
      {
        user ? (
          <div>
            <h3>{user.name}</h3>
            <h3>{user.username}</h3>
            <p>{user.email}</p>
          </div>
        ) :
        <div>'User not found!'</div>
      }
    </div>
  );
};
