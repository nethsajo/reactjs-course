import React, { useState } from 'react';
import { styled } from 'shared/theme';
import { UserForm } from './UserForm';
import { UserList } from './UserList';

const User = props => {
  const [users, setUsers] = useState([]);

  const addUser = user => {
    setUsers(prevUsers => {
      return [...prevUsers, user];
    });
  };

  const deleteUser = id => {
    const index = users.findIndex(user => user.id === id);
    users.splice(index, 1);
    setUsers(prevUsers => {
      return [...prevUsers];
    });
  };

  return (
    <Wrapper>
      <UserForm onAddUser={addUser} />
      <UserList users={users} onDeleteUser={deleteUser} />
    </Wrapper>
  );
};

export default User;

const Wrapper = styled.div`
  max-width: 80rem;
  margin: 8rem auto;
  padding: 0 3.2rem;
`;
