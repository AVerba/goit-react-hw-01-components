import style from './ContactItem.module.css'

export const ContactItem = ({tag, location}) => {
console.log(tag)

  return (
    <li className={style.item}>
      <p>@${tag}</p>
      <p>{location}</p>
    </li>
  );
}
