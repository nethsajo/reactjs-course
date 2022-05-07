import React from 'react';
import MealItem from './MealItem';
import { Card } from 'shared/elements';
import { DUMMY_MEALS } from 'shared/constants/data';
import { StyledAvailableMeals } from 'shared/styles/componentStyles/sectionStyles/mealsStyles';

const MealsAvailable = () => {
  return (
    <StyledAvailableMeals>
      {DUMMY_MEALS.length > 0 && (
        <Card>
          <ul>
            {DUMMY_MEALS.map(meal => {
              return <MealItem key={meal.id} meal={meal} />;
            })}
          </ul>
        </Card>
      )}
      {DUMMY_MEALS.length === 0 && 'No available meals!'}
    </StyledAvailableMeals>
  );
};

export default MealsAvailable;
