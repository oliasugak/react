import React, { useState, useCallback } from 'react';
import './AddMealForm.css';

export const AddMealForm = ({ onSubmit, hideForm }) => {
  const [input, setInput] = useState('');

  const handleInput = useCallback((event) => {
    setInput(event.target.value.replace(/\D/g,''));
  }, []);

  const onSubmitCallback = useCallback((event) => {
    event.preventDefault();

    if (!input) {
      return;
    }

    onSubmit(Number(input));

    setInput('');

    hideForm();
  }, [onSubmit, input, hideForm]);

  return (
    <form
      onSubmit={onSubmitCallback}
      className='add-meal-form'
    >
      <input
        value={input}
        onChange={handleInput}
        placeholder='Type amount here...'
        className='add-meal-form-input'
      />

      <button className='submit-form-button'>
        Сохранить
      </button>
    </form>
  )
};
