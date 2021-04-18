import React from 'react';
import './FeedbackOptions.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className="FeedbackOptions">
      {options.map(option => (
        <button
          className="FeedbackOptions__button"
          name={option}
          type="button"
          key={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
