import style from './Avatar.module.css'
import PropTypes from "prop-types";

export const Avatar = ({username, imgURL}) => {

  return (
    <div className={style.avatarImg}>
      <img className={style.img} src={imgURL} alt={username}/>
    </div>
  )
}
Avatar.propTypes = {
  imgURL: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
