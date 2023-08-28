import React, {Component} from 'react';
import FeedBackOptions from './FeedBackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

export class App extends Component { 
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

  incrementFeedback = (buttonName) => {
    this.setState(prevState => ({
      [buttonName]: prevState[buttonName] + 1,
    }));
  };

  countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };
    
  countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const TotalCountFeedback = this.countTotalFeedback();
        return TotalCountFeedback ? Math.ceil((good / TotalCountFeedback) * 100) : 0;  
     };

  render() {
    const { good, neutral, bad } = this.state;
    const TotalFeedback = this.countTotalFeedback();
        return (
          <div class="container">
            <Section title="Please leave feedback">
                <FeedBackOptions
                  options={['good', 'neutral', 'bad']}
                  onLeaveFeedback={this.incrementFeedback}
                />
            </Section>
            <Section title="Statistics">
              {TotalFeedback ? <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={TotalFeedback}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              /> :
                <Notification message="There is no feedback"></Notification>
              } 
            </Section>
          </div>
        )
  };
};
