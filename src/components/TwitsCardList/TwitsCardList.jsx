import React, { useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage';
import { TwitsCard } from '../TwitsCard/TwitsCard';
import { List } from './TwitsCardsList.styled';
import db from '../../db/db.json';

export const TwitsCardList = () => {
  const [users, setUsers] = useState(db);
  const status = 'hello';
  useEffect(() => {
    getLocalStorage('localStorageData');
    setLocalStorage(users, 'localStorageData');
  }, [users]);

  const changeUser = id => {
    for (const user of users) {
      if (user.id === id) {
        const index = users.indexOf(user);
        if (user.status === 'follow') {
          setUsers(previousState => {
            previousState[index].followers += 1;
            previousState[index].status = 'following';
            return [...previousState];
          });
        }
        if (user.status === 'following') {
          setUsers(previousState => {
            previousState[index].followers -= 1;
            previousState[index].status = 'follow';
            return [...previousState];
          });
        }
      }
    }
  };
  return (
    <List>
      {users.map(user => {
        return (
          <TwitsCard
            key={user.id}
            user={user}
            changeUser={changeUser}
            status={status}
          />
        );
      })}
    </List>
  );
};
