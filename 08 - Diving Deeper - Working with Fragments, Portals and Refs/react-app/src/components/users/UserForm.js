import React, { useState, useRef } from 'react';
import { nanoid } from 'nanoid';
import { Button, Card, Modal } from 'shared/elements';
import Wrapper from 'shared/helpers/Wrapper';
import { styled } from 'shared/theme';

export const UserForm = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const handleSubmitUser = e => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      });

      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)',
      });

      return;
    }

    const data = {
      id: nanoid(),
      name: enteredName,
      age: enteredAge,
    };

    props.onAddUser(data);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';

    nameInputRef.current.focus();
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
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
            <FormInput type="text" id="name" name="name" ref={nameInputRef} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="age">Age</FormLabel>
            <FormInput type="number" id="age" name="age" ref={ageInputRef} />
          </FormControl>
          <Button type="submit">Add User</Button>
        </Form>
      </Card>
    </Wrapper>
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

/**
 * Refs - are actually quite powerful but in their most basic form they allow us to get access to other DOM elements and work with them
 * With refs, we can set up a connection between a HTML element and our other JavaScript code
 * Refs takes a default value that we want to initialize it to
 * It returns a value which allows us to work with that ref, so which allows us to work with that element which we're going to connect it
 * To use the ref, simply add a ref prop to which we want to connect the ref
 * The first time React reaches the returned JSX in this component and renders the JSX
 * It will actually set the values stored in nameInputRef to the native DOM element that is rendered based on this input
 * If we log the nameInputRef, we will see an object that has current property. The current prop holds the actual value that ref is connected with
 *
 */
