import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
        <div class={style.statistics}>
            <p class={style.name}>Good:<span class={style.counter_value}>{good}</span></p>
            <p class={style.name}>Neutral:<span class={style.counter_value}>{neutral}</span></p>
            <p class={style.name}>Bad:<span class={style.counter_value}>{bad}</span></p>
            <p class={style.name}>Total:<span class={style.counter_value}>{total}</span></p>
            <p class={style.name}>Positive feedback:<span class={style.counter_value}>{positivePercentage}%</span></p>
        </div>
    );   

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
