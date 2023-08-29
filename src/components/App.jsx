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
    let totalCount = counterGood + counterNeutral + counterBad;
    return totalCount;
  };

  const onIncrementFeedback = e => {
    //const buttonName = e;
   // console.log(buttonName);
    switch (e) {
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

  const countPositiveFeedbackPercentage = totalCount => {
    const PositiveFeedbackPercentage = Math.ceil((counterGood / totalCount) * 100);
    return PositiveFeedbackPercentage ? PositiveFeedbackPercentage : 0;
  } 
  
    const total = totalCountFeedback();
    const percentage = countPositiveFeedbackPercentage(total);
  return (
          <div className="container">
            <Section title="Please leave feedback">
                <FeedBackOptions
          options={['good', 'neutral', 'bad']}
                  onLeaveFeedback={onIncrementFeedback}
                />
            </Section>
            <Section title="Statistics">
              {totalCountFeedback ? <Statistics
                good={counterGood}
                neutral={counterNeutral}
                bad={counterBad}
                total={total}
                positivePercentage={percentage}
              /> :
                <Notification message="There is no feedback"></Notification>
              } 
            </Section>
          </div>
        )
};