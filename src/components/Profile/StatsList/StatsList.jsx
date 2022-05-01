import style from "../StatsList/StatsList.module.css";

export const StatsList = ({stats}) => {
  return(
    <ul className={style.statsList}>
      <li className={style.item}>
        <span className={style.label}>Followers</span>
        <span className={style.quantity}>{stats.followers}</span>
      </li>
      <li className={style.item}>
        <span className={style.label}>Views</span>
        <span className={style.quantity}> {stats.views}</span>
      </li>
      <li className={style.item}>
        <span className={style.label}>Likes</span>
        <span className={style.quantity}> {stats.likes}</span>
      </li>
    </ul>
  )
}



