
import {Avatar} from './Avatar';
import {UserContacts} from './UserContacts';
import {StatsList} from "./StatsList";

import style from './Profile.module.css'

export const Profile = ({profile}) =>{
  return(
    <div className={style.profileItem}>
      <Avatar imgURL={profile.imgURL} username={profile.username}/>
      <div className={style.userName}>{profile.username}</div>
      <UserContacts contacts={profile.contacts}/>
      <StatsList stats={profile.stats}/>
    </div>
  )
}


