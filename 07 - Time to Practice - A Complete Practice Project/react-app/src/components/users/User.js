import React, { useState } from 'react';
import { styled } from 'shared/theme';
import { UserForm } from './UserForm';
import { UserList } from './UserList';

const User = props => {
  const [users, setUsers] = useState([]);

  const saveUsers = ({ id, username, age }) => {
    setUsers(prevUsers => {
      return [
        ...prevUsers,
        {
          id,
          username,
          age,
        },
      ];
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
      <UserForm onSaveUsers={saveUsers} />
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
