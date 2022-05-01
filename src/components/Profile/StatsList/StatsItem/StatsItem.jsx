import style from './StatsItem.module.css'
import PropTypes from "prop-types";

export const StatsItem=({label,quantity})=>{
  return (
    <li className={style.item}>
      <span>{label}</span>
      <span>{quantity}</span>
    </li>
  )
}
StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
