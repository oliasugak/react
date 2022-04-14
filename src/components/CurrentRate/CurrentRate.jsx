import React, { useState, useCallback, useMemo } from 'react';
import { AddMealForm } from '../AddMealForm';
import { ReactComponent as Pot } from '../../icons/pot.svg';
import './CurrentRate.css';

export const CurrentRate = ({ meals, dailyRate, addMeal }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const showForm = useCallback(() => {
    setIsFormVisible(true);
  }, []);

  const hideForm = useCallback(() => {
    setIsFormVisible(false);
  }, []);

  const alreadyDrunk = useMemo(() => (
    meals.reduce((accum, meal) => (
      accum + meal.amount
    ), 0)
  ), [meals]);

  console.log(meals);

  const alreadyDrunkProcent = useMemo(() => (
    Math.floor(alreadyDrunk * 100 / dailyRate)
  ), [alreadyDrunk, dailyRate]);

  return (
    <div className="current-rate-container">
      <div className="current-rate-image-container">
        <Pot />

        <p className="current-rate-amount">
          {`${alreadyDrunk} мл`}
        </p>
      </div>

      <div className="current-rate-text-container">
        <h2 className="current-rate-label">
          Выпито <span className="rate-procentage">{alreadyDrunkProcent}%</span> от дневной нормы
        </h2> 

        {isFormVisible ? (
          <AddMealForm
            onSubmit={addMeal}
            hideForm={hideForm}
          />
        ) : (
          <button
            className="current-rate-add-button"
            onClick={showForm}
          >
            Добавить
          </button>
        )}
      </div>
    </div>
  );
};
