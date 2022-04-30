
import {Avatar} from './Avatar';
import {UserContacts} from './UserContacts';
import {StatsList} from "./StatsList";
import style from './Profile.module.css'

export const Profile = (data) =>{


  return(
    <div className={style.profileItem}>
      <Avatar {...data}/>
      <div className={style.userName}>{data.userName}</div>
      <UserContacts {...data}/>
      <StatsList {...data}/>
    </div>
  )
}
