import {StatisticItem} from "./StatisticItem"
import style from './Statistics.module.css'



export const Statistics = (data) => {
  const list=Object.values(data)

  return (
    <ul className={style.list}>
      {
        list.map(({id,label,percent}) =>
          <StatisticItem  style={{
            color:'red',
            backgroundColor: 'blue',
          }} key={id} label={label} percent={percent} sty />)
      }


    </ul>

  );


}
