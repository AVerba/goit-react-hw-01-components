import style from './StatisticItem.module.css'

export const StatisticItem = ({label,percent}) => {

  return (
    <li  style={{
      backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  }} className={style.item}>
      <span  className={style.label}>{label}</span>
      <span className={style.percent}>{percent}%</span>
    </li>
  );
}
