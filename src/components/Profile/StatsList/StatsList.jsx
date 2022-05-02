import style from "../StatsList/StatsList.module.css";
import PropTypes from "prop-types";

export const StatsList = ({stats}) => {
  const {followers, views, likes} = stats;

  return (
    <ul className={style.statsList}>
      <li className={style.item}>
        <span className={style.label}>Followers</span>
        <span className={style.quantity}>{followers}</span>
      </li>
      <li className={style.item}>
        <span className={style.label}>Views</span>
        <span className={style.quantity}> {views}</span>
      </li>
      <li className={style.item}>
        <span className={style.label}>Likes</span>
        <span className={style.quantity}> {likes}</span>
      </li>
    </ul>
  )
}

StatsList.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};


