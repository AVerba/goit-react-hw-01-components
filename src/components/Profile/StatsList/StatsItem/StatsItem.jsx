import style from './StatsItem.module.css'
export const StatsItem=({label,quantity})=>{

  return (
    <li className={style.item}>
      <div>{label}</div>
      <div>{quantity}</div>
    </li>
  )
}
