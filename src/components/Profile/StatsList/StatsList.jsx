import {StatsItem} from './StatsItem'
import style from "../StatsList/StatsList.module.css";

export const StatsList = ({stats}) => {
  return(
    <ul className={style.statsList}>
      {
        stats.map(({label,quantity}) =><StatsItem key={Math.floor(Math.random() * 100)} label={label} quantity={quantity}/>)
      }
    </ul>
  )
}



