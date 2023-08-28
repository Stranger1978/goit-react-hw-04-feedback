import React from 'react';
import PropTypes from 'prop-types';
import style from './Notification.module.css';


const Notification = ({ message }) => (
    <p class={style.message}>{message}</p>
);

Notification.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Notification;