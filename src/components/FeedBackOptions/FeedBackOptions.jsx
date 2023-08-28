import React from "react";
import PropTypes from "prop-types";
import style from "./FeedBackOptions.module.css";

const FeedBackOptions = ({options, onLeaveFeedback }) => (
    <div class={style.button_list}>
        {options.map((option) => (
            <button key={option}
                    type="button"
                    class={style.button}
                    onClick={() => onLeaveFeedback(option)}>
                {option}
            </button>
            ))}
    </div>
);

FeedBackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedBackOptions;

