import style from './FriendItem.module.css'

export const FriendItem = ({avatar,name,isOnline}) => {
  return (
   <li className={style.item}>
     <div className={style.status +" "+ (isOnline ? style.isOn : style.isOut)}></div>
     <img className={style.avatar} src={avatar} alt={name}/>
     <p className={style.name}>{name}</p>
   </li>
 );
}
