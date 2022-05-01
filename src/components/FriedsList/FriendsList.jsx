import style from './FriendsList.module.css';
import {FriendItem} from "./FriendItem";

export const FriendsList = (data) => {
  const list=Object.values(data)
  return (
    <ul className={style.friendList}>
      {
        list.map(({id,isOnline,name,avatar})=>{
          return <FriendItem key={id} isOnline={isOnline} name={name} avatar={avatar}/>
        })
      }
    </ul>

  );
}
