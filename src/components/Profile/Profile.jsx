import PropTypes from "prop-types";
import {Avatar} from './Avatar';
import {StatsList} from "./StatsList";

import style from './Profile.module.css'

export const Profile = ({username, tag, location, avatar, stats}) => {

  return (
    <div className={style.profileItem}>
      <Avatar imgURL={avatar} username={username}/>
      <div className={style.userName}>{username}</div>
      <p className={style.tag}>@{tag}</p>
      <p className={style.location}>{location}</p>
      <StatsList stats={stats}/>
    </div>
  )
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};



