import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

const KEYS = {
  good: 'good',
  neutral: 'neutral',
  bad: 'bad',
};

const App = () => {
  const[good, setGood] = useState(0);
  const[neutral, setNeutral] = useState(0);
  const[bad, setBad] = useState(0);
  
  const options = {good, neutral, bad}
  const total = Object.values(options).reduce(
      (total, value) => (total += value),
      0
    );
  
  const countPositiveFeedbackPercentage = () => {
    return `${Math.round(
      (good / total) * 100)}%`;
  };
  const positivePercentage = good
    ? countPositiveFeedbackPercentage()
    : 0;
  

  
  const onBtnClick = e => {
    const { name } = e.target;

    switch (name) {
      case KEYS.good:
        setGood(prevState => prevState + 1);
        break;
      case KEYS.neutral:
        setNeutral(prevState => prevState + 1);
        break;
      case KEYS.bad:
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
    // this.setState(prevState => ({
    //   [e.target.name]: prevState[e.target.name] + 1,
    // }));
  };

   return (
      <div
        style={{
          height: '100vh',
          // display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onBtnClick}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
          </Section>
      </div>
    );
}

export default App;
