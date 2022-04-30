import style from './StatsItem.module.css'
export const StatsItem=({label,quantity})=>{

  return (
    <li className={style.item}>
      <span>{label}</span>
      <span>{quantity}</span>
    </li>
  )
}
