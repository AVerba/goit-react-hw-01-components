import style from './ContactItem.module.css'
import PropTypes from "prop-types";


export const ContactItem = ({tag, location}) => {
  return (
    <li className={style.item}>
      <p>@{tag}</p>
      <p>{location}</p>
    </li>
  );
}
ContactItem.propTypes = {
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
