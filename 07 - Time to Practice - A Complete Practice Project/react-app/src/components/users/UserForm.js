import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button, Card } from 'shared/elements';
import { styled } from 'shared/theme';

export const UserForm = props => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(1);

  const handleChangeUsername = e => {
    setUsername(e.target.value);
  };

  const handleChangeAge = e => {
    setAge(e.target.value);
  };

  const handleSubmitUser = e => {
    e.preventDefault();

    const data = {
      id: nanoid(),
      username,
      age,
    };

    props.onSaveUsers(data);
    setUsername('');
    setAge(1);
  };

  return (
    <Card>
      <form onSubmit={handleSubmitUser}>
        <FormControl>
          <FormLabel htmlFor="username">Username</FormLabel>
          <FormInput
            type="text"
            name="username"
            value={username}
            onChange={handleChangeUsername}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="age">Age</FormLabel>
          <FormInput
            type="number"
            name="age"
            value={age}
            min="1"
            onChange={handleChangeAge}
          />
        </FormControl>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

const FormControl = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 2.4rem;
  }
`;

const FormLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${props => props.theme.colors.neutral[600]};
  text-transform: uppercase;
  margin-bottom: 0.8rem;
`;

const FormInput = styled.input`
  font-family: inherit;
  font-size: 1.6rem;
  padding: 0.6rem 1.2rem;
  border: 2px solid ${props => props.theme.colors.neutral[300]};
  border-radius: 0.5rem;
  outline: none;
`;
