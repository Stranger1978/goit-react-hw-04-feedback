import React, { useState } from 'react';
import FeedBackOptions from './FeedBackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

export  function App () {
  const [counterGood, setCounterGood] = useState(0);
  const [counterNeutral, setCounterNeutral] = useState(0);
  const [counterBad, setCounterBad] = useState(0);

  const totalCountFeedback = () => {
    const totalCount = counterGood + counterNeutral + counterBad;
    return totalCount;
  };

  const incrementFeedback = e => {
    const buttonName = e.target.textContent.toLowerCase();
    switch (buttonName) {
      case 'good':
        setCounterGood(state => state + 1);
        break;
      case 'neutral':
        setCounterNeutral(state => state + 1);
        break;
      case 'bad':
        setCounterBad(state => state + 1);
        break;
      default:
        break;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    const PositiveFeedbackPercentage = Math.ceil((counterGood / totalCountFeedback) * 100);
    return PositiveFeedbackPercentage ? PositiveFeedbackPercentage : 0;
  } 
  
  return (
          <div class="container">
            <Section title="Please leave feedback">
                <FeedBackOptions
                  options={['good', 'neutral', 'bad']}
                  onLeaveFeedback={incrementFeedback}
                />
            </Section>
            <Section title="Statistics">
              {totalCountFeedback ? <Statistics
                good={counterGood}
                neutral={counterNeutral}
                bad={counterBad}
                total={totalCountFeedback}
                positivePercentage={countPositiveFeedbackPercentage}
              /> :
                <Notification message="There is no feedback"></Notification>
              } 
            </Section>
          </div>
        )
};