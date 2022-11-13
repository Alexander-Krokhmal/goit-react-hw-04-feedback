import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.container}>
            {Object.keys(options).map(key => (
                <button className={css.button} type="button" key={key} name={key} onClick={onLeaveFeedback}>{key}</button>
            ))}
    
        </div>);
}

FeedbackOptions.propTypes = {
    options: PropTypes.exact({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
};