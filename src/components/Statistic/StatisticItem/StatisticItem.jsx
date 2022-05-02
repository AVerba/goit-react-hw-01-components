import style from './StatisticItem.module.css'
import PropTypes from "prop-types";

export const StatisticItem = ({label, percentage}) => {

  return (
    <li style={{
      backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
    }} className={style.item}>
      <span className={style.label}>{label}</span>
      <span className={style.percent}>{percentage}%</span>
    </li>
  );
}

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
