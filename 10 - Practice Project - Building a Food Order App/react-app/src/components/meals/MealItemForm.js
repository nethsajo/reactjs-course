import React, { useState, useRef } from 'react';
import { Input, Button } from 'shared/elements';
import { StyledMealForm } from 'shared/styles/componentStyles/mealStyles';

import { MdOutlineAdd } from 'react-icons/md';

const MealItemForm = props => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const quantityRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const quantity = +quantityRef.current.value;

    if (quantity < 1 || quantity > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(quantity);
  };

  return (
    <StyledMealForm onSubmit={submitHandler}>
      <Input
        ref={quantityRef}
        label="quantity:"
        size="sm"
        input={{
          type: 'number',
          min: '1',
          max: '5',
          defaultValue: '1',
          name: 'meal__quantity',
          id: 'meal__quantity_' + props.id,
        }}
      />
      <Button type="submit" className="mt-xs mx-auto" variant="primary">
        <MdOutlineAdd className="icon" />
        <span>Add</span>
      </Button>
      {!amountIsValid && <p>Please enter a valid amount! (1-5)</p>}
    </StyledMealForm>
  );
};

export default MealItemForm;
