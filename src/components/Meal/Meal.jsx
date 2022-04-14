import React from 'react';
import { ReactComponent as WaterDrop } from '../../icons/water-drop.svg';
import { ReactComponent as Clock } from '../../icons/clock.svg';
import { ReactComponent as RecycleBin } from '../../icons/pomoika.svg';
import { getTimeString } from '../../helpers';
import './Meal.css';

export const Meal = ({ meal, onDelete }) => (
  <div className="meal">
    <div className="meal-amount">
      <WaterDrop />

      {`${meal.amount} мл`}
    </div>
    <div className="meal-time">
      <Clock />

      {getTimeString(meal.date)}
    </div>
    <button
      className="remove-meal-button"
      onClick={onDelete}
    >
      <RecycleBin />
    </button>
  </div>
);
