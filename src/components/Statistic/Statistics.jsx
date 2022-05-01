import {StatisticItem} from "./StatisticItem"
import style from './Statistics.module.css'



export const Statistics = (data) => {
  const list=Object.values(data)

  return (
    <div className={style.container}>
      <h2 className="title">Upload stats</h2>
      <ul className={style.list}>
        {
          list.map(({id,label,percent}) =>
            <StatisticItem  style={{
              color:'red',
              backgroundColor: 'blue',
            }} key={id} label={label} percent={percent} sty />)
        }
      </ul>
    </div>


  );


}
