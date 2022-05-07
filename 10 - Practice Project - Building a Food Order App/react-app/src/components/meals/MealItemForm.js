import React from 'react';
import { nanoid } from 'nanoid';
import { Input, Button } from 'shared/elements';
import { StyledMealForm } from 'shared/styles/componentStyles/mealStyles';

import { MdOutlineAdd } from 'react-icons/md';

const MealItemForm = props => {
  return (
    <StyledMealForm>
      <Input
        label="quantity:"
        size="sm"
        input={{
          type: 'number',
          min: '1',
          max: '5',
          defaultValue: '1',
          name: 'meal__quantity',
          id: `${`meal__quanity` + nanoid()}`,
        }}
      />
      <Button type="submit" className="mt-xs mx-auto" variant="primary">
        <MdOutlineAdd className="icon" />
        <span>Add</span>
      </Button>
    </StyledMealForm>
  );
};

export default MealItemForm;
