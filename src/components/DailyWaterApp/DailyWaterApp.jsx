import React, { useState, useCallback } from 'react';
import { DailyRate } from '../DailyRate';
import { CurrentRate } from '../CurrentRate';
import { MealsList } from '../MealsList';
import './DailyWaterApp.css';

const defaultMeals = [
  { 
    id: 1,
    date: new Date(),
    amount: 228,
  },
  { 
    id: 2,
    date: new Date(),
    amount: 228,
  },
  { 
    id: 3,
    date: new Date(),
    amount: 228,
  },
];

let ID_COUNTER = 4;

export const DailyWaterApp = () => {
  const [dailyRate, setDailyRate] = useState(1650);
  const [meals, setMeals] = useState(defaultMeals);

  const addMeal = useCallback((amount) => {
    const meal = {
      id: ID_COUNTER++,
      amount,
      date: new Date(),
    };

    setMeals([...meals, meal]);
  }, [meals]);

  const deleteMeal = useCallback((id) => {
    setMeals(meals.filter((meal) => (
      id !== meal.id
    )));
  }, [meals, setMeals]);

  const updateDailyRate = useCallback((updatedRate) => {
    setDailyRate(updatedRate);
  }, [setDailyRate]);

  return (
    <div className='container'>
      <DailyRate
        dailyRate={dailyRate}
        updateDailyRate={updateDailyRate}
      />

      <div>
        <CurrentRate
          meals={meals}
          dailyRate={dailyRate}
          addMeal={addMeal}
        />

        <MealsList
          meals={meals}
          onDelete={deleteMeal}
        />
      </div>
    </div>
  );
};
