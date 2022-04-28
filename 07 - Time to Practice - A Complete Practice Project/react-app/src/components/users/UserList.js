import React from 'react';
import { Card } from 'shared/elements';
import { styled } from 'shared/theme';
import { IoTrashOutline } from 'react-icons/io5';

export const UserList = props => {
  const deleteUserItem = id => {
    props.onDeleteUser(id);
  };

  return (
    props.users.length > 0 && (
      <Card>
        <UsersWrapper>
          {props.users.map(user => {
            return (
              <UserItem key={user.id}>
                {user.username} ({user.age} years old)
                <button onClick={() => deleteUserItem(user.id)}>
                  <IoTrashOutline className="icon" />
                </button>
              </UserItem>
            );
          })}
        </UsersWrapper>
      </Card>
    )
  );
};

const UsersWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

const UserItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;
  font-weight: 500;

  &:not(:last-child) {
    margin-bottom: 2.4rem;
  }
`;
