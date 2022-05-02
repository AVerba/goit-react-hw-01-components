import style from './FriendItem.module.css'
import PropTypes from "prop-types";

export const FriendItem = ({avatar, name, isOnline}) => {
  return (
    <li className={style.item}>
      <div className={style.status + " " + (isOnline ? style.isOn : style.isOut)}></div>
      <img className={style.avatar} src={avatar} alt={name}/>
      <p className={style.name}>{name}</p>
    </li>
  );
}
FriendItem.protoType = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
