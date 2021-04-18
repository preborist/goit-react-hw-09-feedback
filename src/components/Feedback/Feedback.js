import React from 'react';
import FeedbackOptions from '../FeedbackOptions';
import './Feedback.css';
import PropTypes from 'prop-types';
const options = ['good', 'neutral', 'bad'];

const Feedback = ({ onLeaveFeedback }) => {
  return (
    <>
      <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
    </>
  );
};

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Feedback;
