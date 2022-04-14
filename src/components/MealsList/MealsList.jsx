import React from 'react';
import { Meal } from '../Meal';
import './MealsList.css';

export const MealsList = ({ meals, onDelete }) => {
  return (
    <div className="meals-list">
      {meals.map((meal) => (
        <Meal
          key={meal.id}
          meal={meal}
          onDelete={() => onDelete(meal.id)}
        />
      ))}
    </div>
  );
};
