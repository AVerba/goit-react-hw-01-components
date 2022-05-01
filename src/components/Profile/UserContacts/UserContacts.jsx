import {ContactItem} from './ContactItem'
import style from './UserContacts.module.css'


export const UserContacts = ({contacts}) => {
  return(
    <ul className={style.list}>
      {
        contacts.map(({tag,location}) =><ContactItem key={Math.floor(Math.random() * 100)} tag={tag} location={location}/>)
      }
    </ul>
  )
}
