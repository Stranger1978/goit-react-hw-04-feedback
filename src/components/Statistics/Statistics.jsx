import React from 'react';
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
        <div className={style.statistics}>
            <p className={style.name}>Good:<span className={style.counter_value}>{good}</span></p>
            <p className={style.name}>Neutral:<span className={style.counter_value}>{neutral}</span></p>
            <p className={style.name}>Bad:<span className={style.counter_value}>{bad}</span></p>
            <p className={style.name}>Total:<span className={style.counter_value}>{total}</span></p>
            <p className={style.name}>Positive feedback:<span className={style.counter_value}>{positivePercentage}%</span></p>
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
