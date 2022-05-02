import style from './FriendsList.module.css';
import PropTypes from 'prop-types';
import {FriendItem} from "./FriendItem";

export const FriendsList = ({friends}) => {
  return (
    <ul className={style.friendList}>
      {
        friends.map(({id, isOnline, name, avatar}) => {
          return <FriendItem key={id} isOnline={isOnline} name={name} avatar={avatar}/>
        })
      }
    </ul>
  );
}
FriendsList.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
