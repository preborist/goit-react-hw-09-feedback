import React, { useState } from 'react';
import Feedback from './components/Feedback';
import Statistics from './components/Statictics';
import Section from './components/Section';
import Notification from './components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    const name = e.target.name;

    switch (name) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        console.warn(`Тип поля name - ${name} не обрабатывается`);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositivePercentageFeedback = () => {
    if (good) {
      return Math.round((good / countTotalFeedback()) * 100);
    }
  };

  return (
    <Section title="Please leave feedback">
      <Feedback onLeaveFeedback={handleClick} />
      {countTotalFeedback() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositivePercentageFeedback()}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </Section>
  );
}
