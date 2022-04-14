import React, { useState, useCallback } from 'react';
import { ReactComponent as WaterDrop } from '../../icons/water-drop.svg';
import { ReactComponent as Pencil } from '../../icons/pencil.svg';
import './DailyRate.css';

export const DailyRate = ({ dailyRate, updateDailyRate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState('');

  const showForm = useCallback(() => {
    setIsEditing(true);
  }, []);

  const hideForm = useCallback(() => {
    setIsEditing(false);
  }, []);

  const handleUserInput = useCallback((event) => {
    setInput(event.target.value.replace(/\D/g,''));
  }, []);

  const onSubmit = useCallback((event) => {
    event.preventDefault();

    if (!input) {
      return;
    }

    updateDailyRate(input);

    setInput('');

    hideForm();
  }, [updateDailyRate, input, hideForm]);

  return (
    <div className="left-side">
      <h1 className="greetings">
        Хаю-хай👋👋
      </h1>

      <p className="daily-rate-label">
        Ваша дневная норма воды
      </p>

      <div className="daily-rate-container">
        <div className="rate-amount">
          <WaterDrop />

          <span className="rate-amount-number">
            {`${dailyRate} мл`}
          </span>
        </div>

        {isEditing
        ? (
          <form
            className='daily-rate-form'
            onSubmit={onSubmit}
          >
            <input
              className='daily-rate-input'
              value={input}
              onChange={handleUserInput}
              placeholder="Type amount here..."
            />
            <button>
              <Pencil />
            </button>
          </form>
        ) : (
          <button
            className="change-rate-button"
            onClick={showForm}
          >
            <Pencil />
            Изменить
          </button>
        )}
      </div>
    </div>
  );
};
