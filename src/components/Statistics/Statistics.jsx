import propTypes from 'prop-types';
export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback:{percentage}</p>
    </div>
  );
};
Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  percentage: propTypes.number,
};
