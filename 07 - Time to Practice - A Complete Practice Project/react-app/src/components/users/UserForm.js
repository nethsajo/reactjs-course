import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button, Card, Modal } from 'shared/elements';
import { styled } from 'shared/theme';

export const UserForm = props => {
  const [name, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const handleChangeUsername = e => {
    setUsername(e.target.value);
  };

  const handleChangeAge = e => {
    setAge(e.target.value);
  };

  const handleSubmitUser = e => {
    e.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });

      return;
    }

    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)',
      });

      return;
    }

    const data = {
      id: nanoid(),
      name,
      age,
    };

    props.onAddUser(data);
    setUsername('');
    setAge('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className="mb-8">
        <Form onSubmit={handleSubmitUser}>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput
              type="text"
              name="name"
              value={name}
              onChange={handleChangeUsername}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="age">Age</FormLabel>
            <FormInput
              type="number"
              name="age"
              value={age}
              onChange={handleChangeAge}
            />
          </FormControl>
          <Button type="submit">Add User</Button>
        </Form>
      </Card>
    </>
  );
};

const Form = styled.form`
  padding: 1.8rem 2.4rem;
`;

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
